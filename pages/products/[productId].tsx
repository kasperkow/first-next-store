import { ProductDetails } from '@components/Product'
import {
    GetStaticPathsResult,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()

    if (!data) {
        return <div>Coś poszło nie tak</div>
    }

    console.log(router)

    return (
        <div>
            <ProductDetails
                data={{
                    id: data.id,
                    title: data.title,
                    imgUrl: data.image,
                    imgAlt: data.title,
                    description: data.description,
                    rating: data.rating.count,
                }}
            />
        </div>
    )
}

export default ProductIdPage

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data: StoreApiResponse[] = await res.json()

    return {
        paths: data.map(product => {
            return {
                params: {
                    productId: product.id.toString(),
                },
            }
        }),
        fallback: false,
    }
}

export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<{ productId: string }>) => {
    if (!params?.productId) {
        return {
            props: {},
            notFound: true,
        }
    }

    const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const data: StoreApiResponse | null = await res.json()

    return {
        props: {
            data,
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

export type InferGetStaticPathsType<T> = T extends () => Promise<{
    paths: Array<{ params: infer R }>
}>
    ? R
    : never
