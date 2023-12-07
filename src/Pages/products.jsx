import { Fragment, useEffect, useState, useRef} from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        image: "/images/sepatu baru.jpg",
        name: "Sepatu Terbaru",
        price: 100000,
        description: "Sepatu ini sangat bagus, dan sangat murah"
    },
    {
        id: 2,
        image: "/images/sepatu keren.jpg",
        name: "Sepatu Keren",
        price: 200000,
        description: "Sepatu ini keren dan bagus"
    },
    {
        id: 3,
        image: "/images/sepatu hype.jpg",
        name: "Sepatu Hype",
        price: 300000,
        description: "Sepatu ini terpopuler dan murah"
    }

]

const email = localStorage.getItem("email");

function ProductsPage() {

    const [cart, setCart] = useState([
    ]);

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []); //untuk mengkonversi JSON menjadi array/object
    }, []);

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find(product => product.id === item.id);
                return acc + (product.price * item.qty);
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart)); //untuk mengkonversi array/object menjadi JSON
        }
    }, [cart]);

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    // Add to cart
    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item));
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    }

    // UseRef
    const cartRef = useRef(
        (JSON.parse(localStorage.getItem("cart")) || [])
    );

    // handleAddToCartRef
    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, {id, qty: 1}];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    }

    // totalPriceRef
    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);


    return (
        <Fragment>
            <div className="text-md font-bold text-white flex justify-end bg-blue-500 px-10 h-20 p-5">Selamat Datang {email}
                <Button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-5" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="text-3xl font-bold text-white flex justify-center bg-black mt">Product Yang Tersedia
            </div>

            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-500 ml-5 mb-2">Cart</h1>
                    <table className="table-auto text-left border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Harga</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);

                                if (!product) {
                                    // Tangani kasus ketika produk tidak ditemukan (opsional)
                                    console.error(`Product with ID ${item.id} not found`);
                                    return null;
                                }
                            
                                
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0})}</td>
                                        <td>{item.qty}</td>
                                        <td>{(product.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0})}</td>
                                    </tr>
                                );
                                
                            })}
                                <tr ref={totalPriceRef}>
                                    <td colSpan={3} className="border-t-2 border-black"> Total Price</td>
                                    <td>
                                        {totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0})}
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="flex justify-center">
                <Counter />
            </div> */}
        </Fragment>
    );
}

export default ProductsPage;