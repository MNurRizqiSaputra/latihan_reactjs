import AuthLayouts from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

function RegisterPage () {
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-300">
        <AuthLayouts title="Register" type="register">
            <FormRegister />
        </AuthLayouts>
        </div>
    );
}

export default RegisterPage;