// import '../styles/globals.css'
import Head from 'next/head'
import { Global, css } from '@emotion/react'

import type { AppProps } from 'next/app'
import tw, { GlobalStyles, theme } from 'twin.macro'

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  *, ::after, ::before, html {
    box-sizing: border-box;
  }
  body, html {
    ${tw`font-mono font-weight[400] line-height[1.5]`}
  }
  button, input {
    overflow: visible;
  }
  button, input[type=submit], label[for] {
    cursor: pointer;
  }
  input[type=email], input[type=password], input[type=search], input[type=tel], input[type=text], select, textarea {
    ${tw`bg-white border border-gray-200 border-solid font-size[1em] h-full w-full p-3 sm:p-4`}
  }
  :root {
    --header-height: 115px;
    --window-height: 730px;
    --announcement-bar-height: 35px;
  }
}

`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kohi Best Web</title>
      </Head>
      <GlobalStyles />
      <Global styles={customStyles} />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
