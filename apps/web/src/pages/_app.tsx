import "../styles/globals.css"
import "@/meta/fontawesome"
import type { AppProps } from "next/app"
import { SSRProvider } from "react-aria"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
