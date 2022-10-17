interface RatingProps {
    rating: number
}

export const Rating = ({ rating }: RatingProps) => {
    return <p className="text-purple-500 font-bold">{rating}</p>
}
