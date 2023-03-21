import clsx from "clsx"
import Link from "next/link"

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
  return (
    <header
      className={clsx(
        "sticky top-0 z-50 h-16 dark:bg-black/50 backdrop-blur-md",
        "shadow-[inset_0_-1px_0_0_rgb(255_255_255_/_0.1)]",
        "px-4"
      )}
    >
      <div
        className={clsx(
          "h-full grid grid-cols-[auto_1fr] gap-x-2 items-center"
        )}
      >
        <span className={clsx("min-w-[min-content] pr-12")}>
          <Link href="/" className="h-full flex items-center space-x-2">
            <span className="text-sm font-display tracking-wide font-semibold">
              testing/ui
            </span>
            <span className="w-6 rounded-full aspect-square bg-red-800"></span>
          </Link>
        </span>
        <div className="h-full flex items-center space-x-8 overflow-x-auto">
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
        {/* <div>
          <span
            className={clsx(
              "text-sm border dark:border-white px-4 py-2 rounded-full",
              "bg-transparent text-gray-300 hover:text-black active:text-black"
            )}
          >
            Get started
          </span>
        </div> */}
      </div>
    </header>
  )
}
