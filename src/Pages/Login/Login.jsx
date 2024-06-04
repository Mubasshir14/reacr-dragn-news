import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Login = () => {
    const {user, signIn} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)



        signIn(email, password)
        .then()
        .catch()
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="min-w-[500px] mx-auto w-[40%] border-2 p-5 rounded-lg shadow-lg bg-gray-200 lg:mt-36 space-y-3">
                <h2 className="font-bold text-2xl text-center">Login Your Account</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <p>Email</p>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered w-full " />
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <div className="mt-4 flex justify-center">

                        <input className="btn btn-active btn-accent w-full" type="submit" value="Login" />
                    </div>
                    <p className="text-center mt-4">Don't Have Account ?<Link className="text-red-800" to='/register'>Register</Link></p>
                </form>
                {/* <div className="mt-4 flex justify-center">
                
                <input  className="btn btn-active btn-accent w-full" type="submit" value="Google Login" />
            </div>
            <div className="mt-4 flex justify-center">
               
                <input  className="btn btn-active btn-accent w-full" type="submit" value="Facebook Login" />
            </div> */}
            </div>
        </div>
    );
};

export default Login;