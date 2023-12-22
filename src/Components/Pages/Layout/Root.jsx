
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='overflow-hidden'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;