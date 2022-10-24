import Link from 'next/link'

export const Header = () => {
    return (
        <header className="max-w-7xl mx-auto w-full py-2 px-4 bg-slate-700 text-white">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <a>Main page</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/users">
                            <a>Users</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a>Products</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
