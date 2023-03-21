import "../styles/globals.css"

import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { SSRProvider } from "react-aria"

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
