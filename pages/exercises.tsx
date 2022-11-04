import Link from 'next/link'

interface Exercise {
    href: string
    label: string
}

interface Section {
    [key: string]: Exercise[]
}

const Exercises = () => {
    const links: Section = {
        Products: [
            {
                href: '/products-csr',
                label: 'CSR Products',
            },
            {
                href: '/products-ssg',
                label: 'SSG Products',
            },
        ],
        Pagination: [
            {
                href: '/pagination-csr',
                label: 'CSR Pagination',
            },
            {
                href: '/pagination-ssg',
                label: 'SSG Pagination',
            },
            {
                href: '/pagination',
                label: 'SSG Pagination with all pages',
            },
        ],
    }

    return (
        <div className="flex flex-col min-h-screen max-w-7xl mx-auto w-full py-2 px-4">
            {Object.keys(links).map(section => (
                <>
                    <p className="font-bold">{section}</p>
                    <div className="flex flex-col">
                        {links[section].map(exercise => {
                            return (
                                <Link key={exercise.label} href={exercise.href}>
                                    <a>{exercise.label}</a>
                                </Link>
                            )
                        })}
                    </div>
                </>
            ))}
        </div>
    )
}

export default Exercises
