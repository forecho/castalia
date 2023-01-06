/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-sync-scripts */
// eslint-disable-next-line @next/next/no-document-import-in-page
import { ColorModeScript } from '@chakra-ui/react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import theme from '../theme'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }


    render() {
        return (
            <Html lang="zh-CN">
                <Head>
                    <link rel="icon" href="./castalia-s.png" />
                    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet"></link>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
