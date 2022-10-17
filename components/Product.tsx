import { Rating } from './Rating'

interface ProductProps {
    data: {
        imgUrl: string
        imgAlt: string
        rating: number
        description: string
    }
}

export const ProductLeft = ({ data }: ProductProps) => {
    return (
        <div>
            <picture>
                <img src={data.imgUrl} alt={data.imgAlt} />
            </picture>
            <p>{data.description}</p>
            <Rating rating={data.rating} />
        </div>
    )
}

export const ProductRight = ({ data }: ProductProps) => {
    return (
        <div>
            <p>{data.description}</p>
            <Rating rating={data.rating} />
            <picture>
                <img src={data.imgUrl} alt={data.imgAlt} />
            </picture>
        </div>
    )
}
