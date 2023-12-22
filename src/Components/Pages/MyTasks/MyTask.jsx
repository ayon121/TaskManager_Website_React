
import PropTypes from 'prop-types';

const MyTask = ({task}) => {
    console.log(task);
    return (
        <div>
            
        </div>
    );
};

MyTask.propTypes = {
    task : PropTypes.object
};

export default MyTask;