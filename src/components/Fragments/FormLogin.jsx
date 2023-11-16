import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

function FormLogin() {

    const handleLogin = () => {
        event.preventDefault();

        // Save email and password to local storage
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href="/products"; // Redirect to products page

        // Print email and password to console
        console.log("Email:", event.target.email.value);
        console.log("Password:", event.target.password.value);
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleLogin}>

            <InputForm 
                label="Email" 
                name="email" 
                type="email" 
                placeholder="email" 
            />

            <InputForm 
                label="Password" 
                name="password" 
                type="password" 
                placeholder="password" 
            />

            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4" type="submit">
                Login
            </Button>

        </form>
    )
}

export default FormLogin;