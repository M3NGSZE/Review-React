import CardComponent from "../components/CardComponent"
import { products } from "../data/Product"

const ListProducts = () => {

    return(
        <>
            <h1 className="text-2xl font-bold py-5">Product</h1>
            <div className="grid grid-cols-4 gap-4 pb-4">
                <CardComponent products={products} />
            </div>
        </>
    )
}

export default ListProducts