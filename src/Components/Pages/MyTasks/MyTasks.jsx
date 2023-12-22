import { useContext, useState } from "react";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../../Providers/Authproviders";
import { axiosPublic } from "../../Hooks/useAxiosSecure";
import MyTask from "./MyTask";


const MyTasks = () => {
    const [tasks, setTasks] = useState([])
    const { user } = useContext(AuthContext)
    axiosPublic.get(`/tasks/${user?.email}`)
        .then(res => {
            setTasks(res.data);
        })

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mt-4">Task {tasks.length}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
                    {
                        tasks.map(task => <MyTask key={task._id} task={task}></MyTask>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyTasks;