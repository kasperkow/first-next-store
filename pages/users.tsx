import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Main } from '@components/Main'

const Users = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>
                <p className="max-w-7xl mx-auto w-full py-2 px-4 flex-grow text-3xl font-bold text-blue-600 text-center mt-6">
                    Hello, I&apos;m User
                </p>
            </Main>
            <Footer />
        </div>
    )
}

export default Users
