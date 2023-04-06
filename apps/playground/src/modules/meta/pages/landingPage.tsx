import Head from "next/head"
import { PageNav } from "../components"

export function LandingPage() {
  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <main className="min-h-screen flex flex-col lg:max-w-7xl">
        <PageNav />
        <div className="flex flex-col items-center justify-center mt-16 min-h-[calc(100vh_-_5rem)]">
          <h1 className="text-2xl font-medium drop-shadow text-purple-600 max-w-5xl p-4">
            Simple and Complex Components created with
          </h1>
          <ul className="list-disc">
            <li>React Aria</li>
            <li>Tailwind css</li>
            <ul className="list-disc ml-8">
              <li>dark mode</li>
              <li>light mode</li>
            </ul>
          </ul>
        </div>
      </main>
    </>
  )
}
