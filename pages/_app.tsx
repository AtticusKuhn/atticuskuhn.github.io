import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
// import '../styles/components.css'
import SEO from "../neo-seo.config"
function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </>
}

export default MyApp