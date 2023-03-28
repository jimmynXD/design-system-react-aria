import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"

interface LinkedinBadgeProps {
  children?: string
  subTitle?: string
}
export function LinkedinBadge({ children, subTitle }: LinkedinBadgeProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <div
          className={clsx(
            "drop-shadow rounded-full overflow-hidden flex relative aspect-square",
            "w-40 lg:w-56"
          )}
        >
          <Image fill alt="profile" src="/favicon.png" />
        </div>
        <h1 className="font-bold text-xl">{children}</h1>
        <h2 className=" text-lg text-gray-500 dark:text-gray-300">
          {subTitle || "Software Engineer"}
        </h2>
      </div>
      <div className="flex flex-wrap">
        <Link
          className={clsx(
            "relative",
            "flex items-center text-blue-500 hover:text-blue-600 transition-all"
          )}
          href="https://www.linkedin.com/in/jamesnpro"
          target="_blank"
        >
          <h2>Linkedin</h2>
        </Link>
      </div>
    </div>
  )
}
