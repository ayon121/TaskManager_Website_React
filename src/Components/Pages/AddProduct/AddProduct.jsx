import { useContext } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../../Providers/Authproviders";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const AddProduct = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const useremail = user.email

    const handleAddProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const taskname = form.get('taskname')
        const details = form.get('details')
        const date = form.get('date')
        const status = 'incomplete'

        const task = { taskname, details, date , useremail  , status}
        console.log(task);

        axiosPublic.post('/tasks' , task)
        .then(res =>  {
            if(res.data.insertedId){
                toast('Task Added Successfuly')
                navigate(`/dashboard`)
            }
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex item-center mt-16 font-poppins">
                <div className="h-auto max-w-6xl mx-auto mt-5 mb-8">
                    <div className="card w-auto bg-base-100 shadow-xl border-4 border-double border-main">
                        <form onSubmit={handleAddProduct}>
                            <div className="card-body">
                                <h2 className="text-2xl  text-center">Add Task</h2>
                                {/* <input type="text" name="username" placeholder="username" className="input input-bordered input-info w-full max-w-xs" /> */}
                                <input type="text" name="taskname" placeholder="taskname" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="text" name="details" placeholder="Type details here" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="date" name="date" className="input input-bordered input-info w-full max-w-xs" />
                                <div className="card-actions justify-center">
                                    <input type="submit" value="Add Task" className="btn bg-main text-sub_color" />
                                </div>

                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AddProduct;