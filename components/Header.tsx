import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/free-logo-shop.jpg'
import user from '../public/icons/user.svg'
import search from '../public/icons/search.svg'
import cart from '../public/icons/cart.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const Header = () => {
    const links = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/exercises',
            label: 'Exercises',
        },
        {
            href: '/users',
            label: 'Users',
        },
    ]

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }
    const router = useRouter()
    const activeLink = (url: string, pathname: string) =>
        pathname === url ? 'font-bold' : ''

    return (
        <>
            <div className="w-full bg-white border-b">
                <header className="max-w-screen-2xl mx-auto pl-4 pr-4 l:pl-12 l:pr-12 xl:pl-16 xl:pr-16 2xl:pl-32 2xl:pr-32 text-slate-700">
                    <div className="flex items-center">
                        <Link href="/">
                            <a className="flex grow lg:grow-0">
                                <Image src={logo} alt="Logo" />
                            </a>
                        </Link>

                        <nav className="hidden lg:flex grow justify-center ">
                            <ul className="flex">
                                {links.map(link => (
                                    <li
                                        key={link.href}
                                        className="p-5 hover:underline hover:text-slate-900"
                                    >
                                        <Link href={link.href}>
                                            <a
                                                className={activeLink(
                                                    link.href,
                                                    router.pathname
                                                )}
                                            >
                                                {link.label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div id="iconMenu" className="grid grid-rows-1 grid-cols-4">
                            <button className="p-2">
                                <Link href="/">
                                    <a>
                                        <Image
                                            src={search}
                                            width="24px"
                                            height="24px"
                                            alt="Search"
                                        />
                                    </a>
                                </Link>
                            </button>
                            <button className="p-2">
                                <Link href="/">
                                    <a>
                                        <Image src={cart} alt="Cart" />
                                    </a>
                                </Link>
                            </button>
                            <button className="p-2">
                                <Link href="/">
                                    <a>
                                        <Image src={user} alt="User" />
                                    </a>
                                </Link>
                            </button>
                            <button
                                className=" inline-flex p-2 lg:hidden"
                                onClick={handleClick}
                            >
                                <svg viewBox="0 0 100 80" width="24" height="24">
                                    <rect width="100" height="15"></rect>
                                    <rect y="30" width="100" height="15"></rect>
                                    <rect y="60" width="100" height="15"></rect>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <div
                className={`${
                    active ? '' : 'hidden'
                } w-full border-t-1 border-b-2 lg:hidden`}
            >
                <div className="flex flex-col text-center">
                    {links.map(link => (
                        <Link key={link.href} href={link.href}>
                            <a
                                className={`${activeLink(
                                    link.href,
                                    router.pathname
                                )} w-full px-3 py-2 text-black font-font-bold hover:bg-slate-600 hover:text-white `}
                            >
                                {link.label}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
