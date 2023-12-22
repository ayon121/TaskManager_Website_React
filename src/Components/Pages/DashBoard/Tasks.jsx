
import PropTypes from 'prop-types';

const Tasks = ({task}) => {
    console.log(task);
    const {taskname} = task
    return (
        <div>
            <div className='flex items-center gap-2 border-2 drop-shadow-xl px-1 py-1 rounded-2xl my-3 justify-between'>
                <h1 className='text-main'>{taskname}</h1>
                <button className="btn btn-sm bg-main text-sub_color">To Do</button>
                <button className="btn btn-sm bg-main text-sub_color">Done</button>
            </div>        
        </div>
    );
};

Tasks.propTypes = {
    task : PropTypes.node
};

export default Tasks;