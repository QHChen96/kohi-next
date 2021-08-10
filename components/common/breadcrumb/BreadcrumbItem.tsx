import Link from "next/link"
import React from "react"
import tw from "twin.macro"

interface BreadcrumbItemProps {
  separator?: string
  href?: string
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ separator, children, href }) => {
  return (
    <span>
      {
        href && (
          <Link href={href}>
            <a css={tw`no-underline bg-transparent text-black`} href="">{children}</a>
          </Link>
        ) || (
          <span>{children}</span>
        )
      }
      {
        separator && (
          <span css={tw`text-black mx-1`}>{separator}</span>
        )
      }
    </span>
  )
}

export default BreadcrumbItem
