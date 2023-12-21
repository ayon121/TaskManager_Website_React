import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";



const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex item-center mt-16 font-poppins">
                <div className="h-screen max-w-6xl mx-auto mt-5 ">
                    <div className="card w-auto bg-base-100 shadow-xl border-4 border-double border-main">
                        <div className="card-body">
                            <h2 className="text-2xl  text-center">Login Now</h2>
                            <input type="email" name="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
                            <input type="password" name="password" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                            <div className="card-actions justify-center">
                                <button className="btn bg-main text-sub_color">Login</button>
                                <button className="btn bg-main text-sub_color">Google</button>
                            </div>
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