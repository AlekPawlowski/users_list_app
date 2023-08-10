import { wrapper } from '@/redux'
import type { Metadata } from 'next'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

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
                {children}
            </body>
        </html>
    )
}

export default RootLayout;


// function MyApp({ Component, pageProps }: AppProps) {
//     return <Component {...pageProps} />;
//   }
// export default wrapper.withRedux(MyApp);