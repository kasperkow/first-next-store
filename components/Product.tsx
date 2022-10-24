import Link from 'next/link'
import { Rating } from './Rating'

interface ProductDetails {
    id: number
    title: string
    imgUrl: string
    imgAlt: string
    rating: number
    description: string
}

interface ProductsProps {
    data: ProductDetails
}

export const ProductDetails = ({ data }: ProductsProps) => {
    return (
        <div>
            <Link href={`/products`}>
                <a>
                    <button>Wróc</button>
                </a>
            </Link>
            <p className="text-2xl font-bold">{data.title}</p>
            <picture>
                <img src={data.imgUrl} alt={data.imgAlt} />
            </picture>
            <p>{data.description}</p>
            <Rating rating={data.rating} />
        </div>
    )
}

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'imgUrl' | 'imgAlt'>

interface ProductsListItemProps {
    data: ProductListItem
}

export const ProductListItem = ({ data }: ProductsListItemProps) => {
    return (
        <div>
            <Link href={`products/${data.id}`}>
                <a>
                    <p className="text-2xl font-bold">{data.title}</p>
                </a>
            </Link>
            <picture>
                <img src={data.imgUrl} alt={data.imgAlt} />
            </picture>
        </div>
    )
}
