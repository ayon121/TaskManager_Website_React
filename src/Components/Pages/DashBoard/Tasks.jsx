
import PropTypes from 'prop-types';
import { axiosPublic } from '../../Hooks/useAxiosSecure';
import useTodo from '../../Hooks/useTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tasks = ({task}) => {
    const {taskname , useremail } = task
    const [, refetch] = useTodo()
    const handletodo = () => {
        const todo = {taskname , useremail}
        axiosPublic.post('/todotasks' , todo)
        .then(res => {
            console.log(res.data)
            refetch()
            toast("Added Todo")
        })
    }
    

    return (
        <div>
            <div className='flex items-center gap-2 border-2 drop-shadow-xl px-1 py-3 rounded-2xl my-3 justify-between '>
                <h1 className='text-main'>{taskname}</h1>
                <button className="btn btn-sm bg-main text-sub_color" onClick={handletodo}>To Do</button>
            </div>  
            <ToastContainer/>       
        </div>
    );
};

Tasks.propTypes = {
    task : PropTypes.node
};

export default Tasks;