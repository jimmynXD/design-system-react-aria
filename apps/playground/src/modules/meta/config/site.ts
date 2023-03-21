interface SiteConfig {
  name: string
  description: string
  keywords?: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "labXD/ui",
  description: "React components built with React Aria and Tailwind CSS.",
  keywords:
    "figma plugin, ux, dx, labxd, motif, developer experience, designer experience, designops, api",
  links: {
    twitter: "https://twitter.com/hausofxd",
    github: "https://github.com/labxd/ui",
  },
}
