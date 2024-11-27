import Image from "next/image"

const currentYear = new Date().getFullYear()

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  head: (
    <>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="jamesnpro" />
      <meta property="og:description" content="jamesnpro ux" />
      <script src="https://cdn.optimizely.com/js/24503370226.js"></script>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s | jamesnpro projects",
    }
  },

  logo: (
    <span className={"min-w-[min-content] pr-12 group"}>
      <span className="h-full flex items-center space-x-2">
        <span className="w-6 rounded-full aspect-square overflow-hidden ring-1 ring-gray-200 transition-all group-hover:ring-gray-500">
          <Image width={24} height={24} src="/favicon.png" />
        </span>
        <span className="text-sm font-display tracking-wide font-semibold">
          jamesnpro
        </span>
      </span>
    </span>
  ),
  project: {
    link: "https://github.com/jimmynxd/design-system-react-aria",
  },
  footer: {
    text: (
      <span className="text-sm">
        ©{currentYear} jamesnpro - sofware engineer
      </span>
    ),
  },
}
