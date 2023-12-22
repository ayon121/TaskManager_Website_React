
import PropTypes from 'prop-types';

const MyTask = ({ task }) => {
    console.log(task);
    const {taskname , status , details , date} = task
    return (
        <div className="card w-auto bg-base-100 shadow-xl mx-2 border-4 border-double border-main mt-7 mb-4">
            <div className="card-body">
                <h2 className="card-title">{taskname}</h2>
                <p>{details}</p>
                <div>
                    <h1>Status : {status}</h1>
                    <h1>Date : {date}</h1>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-main text-sub_color">Update</button>
                </div>
            </div>
        </div>
    );
};

MyTask.propTypes = {
    task: PropTypes.object
};

export default MyTask;