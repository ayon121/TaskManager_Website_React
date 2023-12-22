
import PropTypes from 'prop-types';

const Done = ({task}) => {
    const {taskname  } = task
    return (
        <div>
            <div className='flex items-center gap-2 border-2 drop-shadow-xl px-1 py-3 rounded-2xl my-3 justify-between '>
                <h1 className='text-main'>{taskname}</h1>
        
            </div>        
        </div>
    );
};

Done.propTypes = {
    task : PropTypes.node
};

export default Done;