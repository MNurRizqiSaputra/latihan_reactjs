import Button from "../Elements/Button";

function CardProduct(props) {
    const {children} = props;

    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
        {children}
        </div>
    );
}

function Header(props){

    const {image} = props

    return (
        <a href="#">
                <img
                    className="rounded-t-lg p-8"
                    src={image}
                    alt="sepatu"
                />
            </a>
    );
}

function Body(props){

    const {children, name} = props;

    return (
        <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-white">
                        {name}
                    </h5>
                </a>
                <p className="text-gray-300 text-m">
                    {children}
                </p>
            </div>
    );
}

function Footer(props){

    const {price} = props;

    return(
        <div className="flex items-center justify-between px-5 pb-5">
                <span className="text-3xl font-bold text-white">
                    {price}
                </span>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pb-5 rounded">
                    Beli
                </Button>
            </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
