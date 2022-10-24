import { InferGetStaticPropsType } from 'next'
import { ProductDetails, ProductListItem } from '@components/Product'

const ProductPage = ({ data, data2 }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <div className="text-center mb-6">
                <p className="text-3xl mb-3 font-bold">Numbers</p>
                <ul>
                    {data2.map((randomNumber, index) => {
                        return <li key={index}>{randomNumber}</li>
                    })}
                </ul>
            </div>
            <div>
                <p className="text-center text-3xl font-bold mb-3">Products</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {data.map(product => {
                        return (
                            <li key={product.id}>
                                <ProductListItem
                                    data={{
                                        id: product.id,
                                        title: product.title,
                                        imgUrl: product.image,
                                        imgAlt: product.title,
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

export default ProductPage

export const getStaticProps = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data: StoreApiResponse[] = await res.json()

    const res2 = await fetch(
        `http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5`
    )
    const data2: number[] = await res2.json()

    return {
        props: {
            data,
            data2,
        },
    }
}

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
