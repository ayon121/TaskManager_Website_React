import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser , GoogleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // const name = form.get('name')

        // create user
        createUser(email, password)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                toast("Login Success")
                navigate('/')

            })
            .catch(error => toast(error.message))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex item-center mt-16 font-poppins">
                <div className="h-auto max-w-6xl mx-auto mt-5 mb-8">
                    <div className="card w-auto bg-base-100 shadow-xl border-4 border-double border-main">
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                <h2 className="text-2xl  text-center">Register Now</h2>
                                {/* <input type="text" name="username" placeholder="username" className="input input-bordered input-info w-full max-w-xs" /> */}
                                <input type="email" name="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="password" name="password" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                                <div className="card-actions justify-center">
                                    <input type="submit" value="Register" className="btn bg-main text-sub_color" />
                                </div>

                            </div>
                        </form>
                        <div className="px-3 pb-3 text-center">
                            <button className="btn bg-main text-sub_color w-full" onClick={HandleGoogleLogin}>Google</button>
                            <p>Already have a account? <a href="/login" className="text-main mb-2">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default Register;