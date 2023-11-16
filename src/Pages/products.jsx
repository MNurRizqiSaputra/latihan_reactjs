import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
function ProductsPage() {

    return (
        <div className="flex justify-center items-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/sepatu.jpg"/>
                <CardProduct.Body title="Sepatu Terbaru">
                Sepatu ini sangat bagus, dan sangat murah
                    </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.000" />
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image="/images/sepatu.jpg"/>
                <CardProduct.Body title="Sepatu Terbaru">
                Sepatu ini sangat bagus, dan sangat murah
                    </CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.000" />
            </CardProduct>
            
        </div>
    );
}

export default ProductsPage;