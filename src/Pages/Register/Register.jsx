import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {

    const {createUser} = useContext(AuthContext)






    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        // create acoount
        createUser(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:mt-20">
                <div className="min-w-[500px] mx-auto w-[40%] border-2 p-5 rounded-lg shadow-lg bbg-gray-200 ">
                    <h2 className="font-bold text-xl text-center mb-3">Please Register Your Account</h2>
                    <form onSubmit={handleRegister}>
                        <div>
                            <p>Name</p>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                        </div>
                        <div>
                            <p>Photo URL</p>
                            <input type="" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                        </div>

                        <div>
                            <p>Password</p>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
                        </div>
                        {/* <div>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full " />
                </div> */}
                        <div className="mt-2 flex  items-center gap-2">
                            <input type="checkbox" name="checkbox" id="" />
                            <p>Accept <span className="font-bold">Term & Condition</span></p>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <input className="btn btn-active btn-accent w-full" type="submit" value="Register" />
                        </div>
                        <p className="text-center mt-4">Already Have Account ?<Link className="text-red-800 font-bold" to='/login'>Login</Link> Here</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;