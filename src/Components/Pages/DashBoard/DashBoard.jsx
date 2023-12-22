import { Link } from "react-router-dom";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import Tasks from "./Tasks";


const DashBoard = () => {
    const [tasks, setTasks] = useState([])
    const { user } = useContext(AuthContext)
    axiosPublic.get(`/tasks/${user?.email}`)
        .then(res => {
            setTasks(res.data);
        })
    return (
        <div>
            <div className="font-poppins">
                <Navbar></Navbar>
                <div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mt-4">Dashboard</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 mt-5 mb-5">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-xl md:text-2xl text-center">Welcome, {user?.email}</h1>
                        
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
                        <div className="card w-auto bg-main text-sub_color h-36">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Total Tasks</h2>
                                <p className="text-4xl md:text-5xl">{tasks?.length || '00'}</p>
                            </div>
                        </div>
                        <Link to="/addproduct">
                            <div className="card w-auto bg-main text-sub_color h-36">
                                <div className="card-body items-center text-center justify-center">
                                    <h2 className="card-title text-4xl">Add Task</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* two part */}
                    <div  className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
                        <div className="px-2 py-3 border-4 border-main rounded-3xl text-center">
                            <h1>All Tasks</h1>
                            <hr />
                            {
                                tasks.map(task => <Tasks key={task._id} task={task}></Tasks>)
                            }

                        </div>
                        <div className="px-2 py-3 border-4 border-main rounded-3xl text-center">
                            <h1>To Do</h1>
                            <hr />

                        </div>
                        <div className="px-2 py-3 border-4 border-main rounded-3xl text-center">
                            <h1>Done</h1>
                            <hr />

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;