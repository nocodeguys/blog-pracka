import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6">My Blog</h1>
        <ul className="space-y-4">
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              <a href="/blog/first-post" className="hover:underline">My First Blog Post</a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">A brief introduction to my blog and what I plan to write about.</p>
            <span className="text-sm text-gray-500 dark:text-gray-300 block mb-2">Posted on April 1, 2024</span>
            <Button variant="outline" asChild>
              <a href="/blog/first-post">Read More</a>
            </Button>
          </Card>
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              <a href="/blog/second-post" className="hover:underline">Exploring Next.js</a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">My thoughts on using Next.js for building modern web applications.</p>
            <span className="text-sm text-gray-500 dark:text-gray-300 block mb-2">Posted on April 5, 2024</span>
            <Button variant="outline" asChild>
              <a href="/blog/second-post">Read More</a>
            </Button>
          </Card>
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              <a href="/blog/third-post" className="hover:underline">The Power of Tailwind CSS</a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">How Tailwind CSS has revolutionized my approach to styling web applications.</p>
            <span className="text-sm text-gray-500 dark:text-gray-300 block mb-2">Posted on April 10, 2024</span>
            <Button variant="outline" asChild>
              <a href="/blog/third-post">Read More</a>
            </Button>
          </Card>
        </ul>
      </main>
    </div>
  );
}
