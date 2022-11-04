import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </QueryClientProvider>
        </div>
    )
}

export default MyApp
