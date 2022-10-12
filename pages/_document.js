import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        // function handleState() {
        //     window.splitbee.track("Button Click")
        // }
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}