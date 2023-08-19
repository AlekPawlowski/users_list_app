"use client"

import StyledComponentsRegistry from '@/styles/registry'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { store } from '@/redux';
import { Provider } from 'react-redux'
import { HomePageLink } from '@/styles/SMain'

const inter = Inter({ subsets: ['latin'] })

function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <title>User list application</title>
            <meta name="title" content='User list application' />
            <meta name="description" content='For learn Next' />
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <HomePageLink>
                        <Link href="/">Home</Link>
                    </HomePageLink>
                    <Provider store={store}>

                        {children}
                    </Provider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

export default RootLayout;


// function MyApp({ Component, pageProps }: AppProps) {
//     return <Component {...pageProps} />;
//   }
// export default wrapper.withRedux(MyApp);