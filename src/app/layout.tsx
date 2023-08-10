import { wrapper } from '@/redux'
import StyledComponentsRegistry from '@/styles/registry'
import type { Metadata } from 'next'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'User list application',
    description: 'For Proxe',
}

function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Link href="/">Home</Link>
                <StyledComponentsRegistry>
                    {children}
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