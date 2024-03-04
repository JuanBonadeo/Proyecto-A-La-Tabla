import Hero2 from "../Hero2/Hero2.jsx"
import Hero1 from "../Hero1/Hero1.jsx"
import ProductsContainer from "../ProductsContainer/ProductsContainer.jsx"
import { Loader } from "../Loader/Loader.jsx"

const HomeView = () => {
    return (
        <>
            <Hero2/>
            <Hero1/>  
            <ProductsContainer/>
        </>
    )
}
export default HomeView