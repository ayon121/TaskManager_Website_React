import { Link } from "react-router-dom";


const DashBoard = () => {
    return (
        <div>
            <div>
                <h1>DashBoard </h1>
                <Link to="/addproduct"><button className="btn">Add</button></Link>
            </div>
        </div>
    );
};

export default DashBoard;