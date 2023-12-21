import { useContext } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../../Providers/Authproviders";



const Login = () => {
    const { loginUser } = useContext(AuthContext)

    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then(result => console.log(result))
            .catch(error => console.log(error))

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex item-center mt-16 font-poppins">
                <div className="h-auto max-w-6xl mx-auto mt-5 ">
                    <div className="card w-auto bg-base-100 shadow-xl border-4 border-double border-main mb-6">
                        <form action={handlelogin}>
                            <div className="card-body">
                                <h2 className="text-2xl  text-center">Login Now</h2>
                                <input type="email" name="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="password" name="password" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                                <div className="card-actions justify-center">
                                    <button className="btn bg-main text-sub_color">Login</button>
                                </div>
                            </div>
                        </form>
                        <div className="px-3 pb-3 text-center">
                            <button className="btn bg-main text-sub_color w-full">Google</button>
                            <p>Do not have a account? <a href="/register" className="text-main">Register Now</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;