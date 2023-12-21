import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";



const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex item-center mt-16 font-poppins">
                <div className="h-screen max-w-6xl mx-auto mt-5 ">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-2xl  text-center">Login Now</h2>
                            <input type="email" name="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" />
                            <input type="password" name="password" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;