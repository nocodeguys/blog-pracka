import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getBlogPosts, formatDate } from '@/app/blog/utils'

export default function Home() {
  const posts = getBlogPosts()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6">My Blog</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <Card key={post.slug} className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <a href={`/blog/${post.slug}`} className="hover:underline">{post.metadata.title}</a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{post.metadata.summary}</p>
              <span className="text-sm text-gray-500 dark:text-gray-300 block mb-2">
                Posted on {formatDate(post.metadata.publishedAt)}
              </span>
              <Button variant="outline" asChild>
                <a href={`/blog/${post.slug}`}>Read More</a>
              </Button>
            </Card>
          ))}
        </ul>
      </main>
    </div>
  );
}
