
import PropTypes from 'prop-types';
import { axiosPublic } from '../../Hooks/useAxiosSecure';
import useDone from '../../Hooks/useDone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TodoTasks = ({task}) => {
    const {taskname , useremail } = task
    const [, refetch] = useDone()
    const handledone = () => {
        const done = {taskname , useremail}
        axiosPublic.post('/donetasks' , done)
        .then(res => {
            console.log(res.data)
            refetch()
            toast("Added Done")
        })
    }
    return (
        <div>
            <div className='flex items-center gap-2 border-2 drop-shadow-xl px-1 py-3 rounded-2xl my-3 justify-between '>
                <h1 className='text-main'>{taskname}</h1>
                <button className="btn btn-sm bg-main text-sub_color" onClick={handledone}>Done</button>
            </div>  
            <ToastContainer/>      
        </div>
    );
};

TodoTasks.propTypes = {
    task : PropTypes.node
};

export default TodoTasks;