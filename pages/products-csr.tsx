import { ProductDetails } from '@components/Product'
import { useQuery } from '@tanstack/react-query'

const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data: StoreApiResponse[] = await res.json()

    return data
}

const getNumbers = async () => {
    const res2 = await fetch(
        `http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5`
    )
    const data2: number[] = await res2.json()

    return data2
}

const ProductCSRPage = () => {
    const result = useQuery(['products'], getProducts)
    const result2 = useQuery(['numbers'], getNumbers)

    if (result.isError || result2.isError) {
        return (
            <div>
                <p>Error</p>
            </div>
        )
    }

    if (result.isLoading || result2.isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="text-center mb-6">
                <p className="text-3xl mb-3 font-bold">Numbers</p>
                <ul>
                    {result2.data.map((randomNumber, index) => {
                        return <li key={index}>{randomNumber}</li>
                    })}
                </ul>
            </div>
            <div>
                <p className="text-center text-3xl font-bold mb-3">Products</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {result.data.map(product => {
                        return (
                            <li key={product.id}>
                                <ProductDetails
                                    data={{
                                        id: product.id,
                                        title: product.title,
                                        description: product.description,
                                        imgUrl: product.image,
                                        imgAlt: product.title,
                                        rating: product.rating.rate,
                                    }}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProductCSRPage

interface StoreApiResponse {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        count: number
        rate: number
    }
}
