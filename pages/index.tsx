import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Main } from '@components/Main'
import { ProductDetails } from '@components/Product'

const DATA1 = {
    id: 1,
    title: 'Test 1',
    imgUrl: 'https://i.picsum.photos/id/537/500/300.jpg?hmac=pwDQHy5AfKC9cRzKJFqZ-2A40ExdclBcuGg8L_t0aWI',
    imgAlt: 'Galaxy lorem ipsum',
    rating: 4.5,
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere \
        eget tellus at volutpat. Curabitur dictum consectetur porta. Aliquam \
        interdum sed augue vestibulum eleifend. Curabitur quis magna mattis, \
        elementum enim vitae, condimentum nibh. Pellentesque gravida lacinia \
        ornare. Integer diam enim, dignissim id malesuada suscipit, iaculis id \
        nunc. Donec sodales turpis purus, dignissim viverra lectus pulvinar a. \
        Morbi rhoncus non nunc ut lobortis. Quisque mattis, massa ac facilisis \
        pretium, augue quam dictum nibh, eget porttitor odio mauris lacinia \
        dolor. Vivamus ultricies enim a pretium aliquet. Suspendisse potenti. \
        Maecenas lacinia aliquam urna vel accumsan. Praesent nec congue lorem, \
        eu sodales eros. Vivamus efficitur turpis aliquet mollis fringilla.',
}
const DATA2 = {
    id: 2,
    title: 'Test 2',
    imgUrl: 'https://i.picsum.photos/id/305/500/300.jpg?hmac=OLcz1VBLWWeA1lXKNgREsngR7CyjghZrI5AJCW9azAg',
    imgAlt: 'Another lorem ipsum',
    rating: 3.7,
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere \
        eget tellus at volutpat. Curabitur dictum consectetur porta. Aliquam \
        interdum sed augue vestibulum eleifend. Curabitur quis magna mattis, \
        elementum enim vitae, condimentum nibh. Pellentesque gravida lacinia \
        ornare. Integer diam enim, dignissim id malesuada suscipit, iaculis id \
        nunc. Donec sodales turpis purus, dignissim viverra lectus pulvinar a. \
        Morbi rhoncus non nunc ut lobortis. Quisque mattis, massa ac facilisis \
        pretium, augue quam dictum nibh, eget porttitor odio mauris lacinia \
        dolor. Vivamus ultricies enim a pretium aliquet. Suspendisse potenti. \
        Maecenas lacinia aliquam urna vel accumsan. Praesent nec congue lorem, \
        eu sodales eros. Vivamus efficitur turpis aliquet mollis fringilla.',
}

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>
                <ProductDetails data={DATA1} />
                <ProductDetails data={DATA2} />
            </Main>
            <Footer />
        </div>
    )
}

export default Home
