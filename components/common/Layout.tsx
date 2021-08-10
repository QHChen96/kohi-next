import tw from "twin.macro"
import Announcement from "./Announcement"
import Footer from "./Footer"
import Header, { NavMenuType } from "./Header"

interface Props {
  className?: string
}

const Layout: React.FC<Props> = ({ className, children, ...props }) => {
  const navMenus: NavMenuType[] = [
    {
      menuId: "NEW_IN",
      menuName: "NEW IN",
      handle: "new-in",
      subMenus: [
        {
          menuId: "NEW_IN_SWIM",
          menuName: "NEW IN：SWIM",
          handle: "new-in-swim",
          subMenus: [
            {
              menuId: "New_In_Bikini_Sets",
              menuName: "New In: Bikini Sets",
              handle: "new-in-bikini-sets",
            },
            {
              menuId: "New_In_One_Pieces",
              menuName: "New In: One Pieces",
              handle: "new-in-one-pieces",
            },
            {
              menuId: "New_In_Bikini_Separates",
              menuName: "New In: Bikini Separates",
              handle: "new-in-bikini-separates",
            },
            {
              menuId: "New_In_Plus_Size",
              menuName: "New In: Plus Size",
              handle: "new-in-plus-size",
            },
            {
              menuId: "Restock",
              menuName: "Restock",
              handle: "restock",
            }
          ]
        },
        {
          menuId: "NEW_IN_CLOTHING",
          menuName: "NEW IN：CLOTHING",
          handle: "new-in-clothing",
          subMenus: [
            {
              menuId: "New_In_Cover_Ups",
              menuName: "New In: Cover Ups",
              handle: "new-in-cover-ups",
            },
            {
              menuId: "New_In_Dresses",
              menuName: "New In: Dresses",
              handle: "new-in-dresses",
            },
            {
              menuId: "New_In_Bodysuits",
              menuName: "New In: Bodysuits",
              handle: "new-in-bodysuits",
            },
            {
              menuId: "New_In_Accessories",
              menuName: "New In: Accessories",
              handle: "new-in-accessories",
            },
          ]
        }
      ],
      ads: [
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/3_ec0daa6b-1942-49ec-9baa-b2da01554d42_370x230@2x.jpg?v=1625102492",
          title: "FUN IN THE SUN",
        },
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/2_41bddd78-1390-4715-be5d-78c6e86f46ea_370x230@2x.jpg?v=1625707766",
          title: "Kids Swimwear",
        }
      ]
    },
    {
      menuId: "BIKINIS",
      menuName: "BIKINIS",
      handle: "bikinis",
      subMenus: [
        {
          menuId: "BIKINIS_",
          menuName: "BIKINIS",
          handle: "bikinis",
          subMenus: [
            {
              menuId: "Just_In_Bikinis",
              menuName: "Just In: Bikinis",
              handle: "just-in-bikinis",
            },
            {
              menuId: "Bikini_Sets",
              menuName: "Bikini Sets",
              handle: "bikini-sets",
            },
            {
              menuId: "Restock_Bikinis",
              menuName: "Restock：Bikinis",
              handle: "restock-bikinis",
            }
          ]
        },
        {
          menuId: "FEATURED",
          menuName: "FEATURED",
          handle: "featured",
          subMenus: [
            {
              menuId: "High_Waisted",
              menuName: "High Waisted",
              handle: "high-waisted",
            },
            {
              menuId: "Low_Rise",
              menuName: "Low Rise",
              handle: "low-rise",
            },
            {
              menuId: "Tankinis",
              menuName: "Tankinis",
              handle: "tankinis",
            }
          ]
        }

      ],
      ads: [
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/bikini_4a128a45-eb76-4c95-8a40-fad4ac021b0b_370x230@2x.jpg?v=1621135443",
          title: "Trendy Prints",
        },
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/bikini_d0c5d76e-b1d1-440a-ac1a-eb8935f55c80_370x230@2x.jpg?v=1621135478",
          title: "Timeless Stripes",
        }
      ]
    },
    {
      menuId: "ONE_PIECES",
      menuName: "ONE PIECES",
      handle: "one-pieces",
      subMenus: [

      ],
      ads: [
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/b51bbe276ec6a6aeb5a23693877b7b92_370x230@2x.jpg?v=1621135326",
          title: "Halter & Lace Up",
        },
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/O_370x230@2x.jpg?v=1621135344",
          title: "Sun Kissed Collection",
        }
      ]
    },
    {
      menuId: "MIX_MATCH",
      menuName: "MIX & MATCH",
      handle: "mix-match",
      subMenus: [
        {
          menuId: "MIX & MATCH",
          menuName: "MIX & MATCH",
          handle: "mix-match",
          subMenus: [
            {
              menuId: "Bikini Tops",
              menuName: "Bikini Tops",
              handle: "bikini-tops",
            },
            {
              menuId: "Bikini Bottoms",
              menuName: "Bikini Bottoms",
              handle: "bikini-bottoms",
            },
          ]
        },
      ],
      ads: [
        {
          imageUrl: "http://cdn.shopifycdn.net/s/files/1/0784/0207/files/Mix_Match_Bikini_Inspo_370x230@2x.jpg?v=1614318323",
          title: "Bikini Inspo",
        },
      ]
    },
    {
      menuId: "PLUS_SIZE",
      menuName: "PLUS SIZE",
      handle: "plus-size",
    },
    {
      menuId: "CLOTHING",
      menuName: "CLOTHING",
      handle: "clothing",
    },
    {
      menuId: "BEST_SELLERS",
      menuName: "BEST SELLERS",
      handle: "best-sellers",
    },
  ]
  return (
    <div css={tw`relative bg-white`}>
      <Announcement messages={['SHOP NOW, PAY LATER WITH AFTERPAY', 'HELLO, WELCOME']} />
      <Header navMenus={navMenus} />
      <main>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
