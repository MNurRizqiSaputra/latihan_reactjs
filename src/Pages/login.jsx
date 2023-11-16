import AuthLayouts from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";


function LoginPage () {
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-300">
        <AuthLayouts title="Login" type="login">
            <FormLogin />
        </AuthLayouts>
        </div>
    );
}

export default LoginPage;