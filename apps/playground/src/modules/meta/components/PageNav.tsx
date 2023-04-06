import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
export function PageNav() {
  const links = [
    "checkbox",
    "input",
    "tabs",
    "combobox",
    "select",
    "search",
    "menu",
    "date-time",
    "calendar",
    "modal",
  ]

  const router = useRouter()
  const navLinks = [
    {
      label: "Components",
      href: "/components",
      active: router.pathname.startsWith("/components"),
    },
    {
      label: "Kitchen Sink",
      href: "/kitchen",
      active: router.pathname.startsWith("/kitchen"),
    },
  ]
  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-10 bg-gray-100/50 dark:bg-black/50 backdrop-blur-md",
          "shadow-md"
          // shadow-[inset_0_-1px_0_0_rgb(255_255_255_/_0.1)]
        )}
      >
        <div
          className={clsx(
            "h-16 flex items-center justify-between xl:max-w-7xl px-2 mx-auto"
          )}
        >
          <span className={"min-w-[min-content] pr-12 group"}>
            <Link href="/" className="h-full flex items-center space-x-2">
              <span className="w-6 rounded-full aspect-square overflow-hidden ring-1 ring-gray-200 transition-all group-hover:ring-gray-500">
                <Image
                  alt="jimmy headshot"
                  width={24}
                  height={24}
                  src="/favicon.png"
                />
              </span>
              <span className="text-sm font-display tracking-wide font-semibold">
                jamesnpro/ui
              </span>
            </Link>
          </span>
          <div className="h-full flex flex-1 items-center space-x-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "px-2 h-full flex flex-col justify-center border-b-2",
                  {
                    "border-b-blue-700 text-blue-700 drop-shadow-md":
                      link.active,
                    "border-b-transparent": !link.active,
                  }
                )}
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Link
              href="https://github.com/jimmynXD/design-system-react-aria/"
              target="_blank"
              className={clsx(
                "hidden md:block",
                "cursor-pointer text-sm border dark:border-white px-4 py-2 rounded-full",
                "bg-transparent text-gray-700 dark:text-gray-300 hover:text-black active:text-black"
              )}
            >
              Github
            </Link>
            <span className="flex items-center pl-4"></span>
          </div>
        </div>
      </header>
      <footer
        className={clsx(
          "inset-x-0 bottom-0 z-10 bg-purple-100/50 dark:bg-black/50 backdrop-blur-md",
          "shadow-md",
          {
            hidden: !router.pathname.startsWith("/kitchen"),
            fixed: router.pathname.startsWith("/kitchen"),
          }
          // shadow-[inset_0_-1px_0_0_rgb(255_255_255_/_0.1)]
        )}
      >
        <div
          className={clsx(
            "h-16 w-full grid justify-center items-center xl:max-w-7xl px-2 mx-auto overflow-x-auto"
          )}
        >
          <div className="w-full space-x-8 overflow-x-auto h-full flex items-center">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="whitespace-nowrap hover:drop-shadow-lg last:pr-12"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
