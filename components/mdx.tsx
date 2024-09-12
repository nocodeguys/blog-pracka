import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

type TableData = {
  headers: string[];
  rows: (string | number)[][];
}

function Table({ data }: { data: TableData }) {
  return (
    <table>
      <thead>
        <tr>
          {data.headers.map((header: string, index: number) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row: (string | number)[], rowIndex: number) => (
          <tr key={rowIndex}>
            {row.map((cell: string | number, cellIndex: number) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href

  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href?.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  const { alt, ...rest } = props
  return <Image className="rounded-lg" alt={alt || 'Image'} {...rest} />
}

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  return function Heading({ children }: { children: React.ReactNode }) {
    const slug = slugify(React.Children.toArray(children).join(''))
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
        children
      ]
    )
  }
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
} as const;

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={components}
    />
  )
}
