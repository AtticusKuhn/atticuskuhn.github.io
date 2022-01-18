import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/globals.css'
// import '../styles/components.css'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp