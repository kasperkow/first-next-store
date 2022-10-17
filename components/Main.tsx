import { ReactNode } from 'react'

interface MainProps {
    children: ReactNode
}

export const Main = ({ children }: MainProps) => {
    return (
        <main className="max-w-7xl mx-auto w-full py-2 px-4 flex-grow grid gap-5 sm:grid-cols-2 place-items-center">
            {children}
        </main>
    )
}
