import { Link } from "react-router-dom";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import moment from 'moment'


const DashBoard = () => {
    const [tasks, setTasks] = useState([])
    const { user } = useContext(AuthContext)
    axiosPublic.get(`/tasks/${user?.email}`)
        .then(res => {
            setTasks(res.data);
        })

    console.log(moment().format("dddd, MMMM Do YYYY, a"));
    return (
        <div>
            <div className="font-poppins">
                <Navbar></Navbar>
                <div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mt-4">Dashboard</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-5 mb-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl md:text-2xl ">Welcome, {user?.email}</h1>
                        <Link to="/addproduct"><button className="btn bg-main text-sub_color">Add Task</button></Link>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
                        <div className="card w-auto bg-main text-sub_color ">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Total Tasks</h2>
                                <p className="text-4xl md:text-5xl">{tasks?.length || '00'}</p>
                            </div>
                        </div>      
                        
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;