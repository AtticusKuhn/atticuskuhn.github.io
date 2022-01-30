import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
// import '../styles/components.css'
import SEO from "../neo-seo.config"
function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <link
            href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
            rel="stylesheet"
        />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </>
}

export default MyApp