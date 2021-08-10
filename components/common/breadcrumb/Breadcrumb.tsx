import React from "react"
import tw from "twin.macro"

interface BreadcrumbProps {

}

interface BreadcrumbRoute {
  path?: string
  breadcrumbName: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
}) => {
  return (
    <nav css={tw`block text-gray-500 font-size[12px] py-2 mb-2 mx-12`}>
      {
        children
      }
    </nav>
  )
}

export default Breadcrumb
