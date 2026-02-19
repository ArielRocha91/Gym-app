import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider, auth } from "../firebase";

function Login() {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="login-box">
            <h2>Ininicar Sesion</h2>
            <button className="login-btn" onClick={handleLogin}>Iniciar con Google</button>
        </div>
    );
}

export default Login;
