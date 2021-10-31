import { ServerStyleSheets } from '@material-ui/core/styles';
import Document,{ Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

export default class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async(contex)=>{
    const sheets = new ServerStyleSheets();
    const originalRenderPage = contex.renderPage;
    contex.renderPage = () =>{
        return originalRenderPage({
            enhanceApp:(App) => (props) => sheets.collect(<App {...props}/>),
        })
    }
    const initialProps = await Document.getInitialProps(contex);
    return {
        ...initialProps,
        styles:[
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };
};