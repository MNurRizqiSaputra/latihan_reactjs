import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        image: "/images/sepatu baru.jpg",
        name: "Sepatu Terbaru",
        price: "Rp. 100.000",
        description: "Sepatu ini sangat bagus, dan sangat murah"
    },
    {
        image: "/images/sepatu keren.jpg",
        name: "Sepatu Keren",
        price: "Rp. 200.000",
        description: "Sepatu ini keren dan bagus"
    },
    {
        image: "/images/sepatu hype.jpg",
        name: "Sepatu Hype",
        price: "Rp. 300.000",
        description: "Sepatu ini terpopuler dan murah"
    }

]

function ProductsPage() {

    return (
        <div className="flex justify-center items-center py-5">

            {products.map((product) => (
                <CardProduct>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body name={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
            </CardProduct>
            ))}
            
        </div>
    );
}

export default ProductsPage;