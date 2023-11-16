import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

function FormRegister() {
    return (
        <form action="">

            <InputForm 
                label="Username" name="username" type="text" placeholder="username" 
            />

            <InputForm 
                label="Email" name="email" type="email" placeholder="email" 
            />

            <InputForm 
                label="Password" name="password" type="password" placeholder="password" 
            />

            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                Register
            </Button>

        </form>
    )
}

export default FormRegister;