import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        image: "/images/sepatu baru.jpg",
        name: "Sepatu Terbaru",
        price: "Rp. 100.000",
        description: "Sepatu ini sangat bagus, dan sangat murah"
    },
    {
        id: 2,
        image: "/images/sepatu keren.jpg",
        name: "Sepatu Keren",
        price: "Rp. 200.000",
        description: "Sepatu ini keren dan bagus"
    },
    {
        id: 3,
        image: "/images/sepatu hype.jpg",
        name: "Sepatu Hype",
        price: "Rp. 300.000",
        description: "Sepatu ini terpopuler dan murah"
    }

]

const email = localStorage.getItem("email");

function ProductsPage() {
    // Logout
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    return (
        <Fragment>
        <div className="text-md font-bold text-white flex justify-end bg-blue-500 px-10 h-20 p-5">Selamat Datang {email}
        <Button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-5" onClick={handleLogout}>
            Logout
        </Button>
        </div>
        <div className="text-3xl font-bold text-white flex justify-center bg-black mt">Product Yang Tersedia
        </div>

        <div className="flex justify-center items-center py-5">

            {products.map((product) => (
                <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body name={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
            </CardProduct>
            ))}
            
        </div>
        </Fragment>
    );
}

export default ProductsPage;