

export default class MyDocument extends Document {
    render() {
        const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
        return (
            <Html lang="en">
                <Head />
                <body className={pageProps.isDarkTheme ? 'dark-theme' : ''}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
