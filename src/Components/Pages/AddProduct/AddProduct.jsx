import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const taskname = form.get('taskname')
        const details = form.get('details')
        const date = form.get('date')

        const task = { taskname, details, date }
        console.log(task);

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex item-center mt-16 font-poppins">
                <div className="h-auto max-w-6xl mx-auto mt-5 mb-8">
                    <div className="card w-auto bg-base-100 shadow-xl border-4 border-double border-main">
                        <form onSubmit={handleAddProduct}>
                            <div className="card-body">
                                <h2 className="text-2xl  text-center">Add Task</h2>
                                {/* <input type="text" name="username" placeholder="username" className="input input-bordered input-info w-full max-w-xs" /> */}
                                <input type="text" name="taskname" placeholder="taskname" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="text" name="details" placeholder="Type details here" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="date" name="date" className="input input-bordered input-info w-full max-w-xs" />
                                <div className="card-actions justify-center">
                                    <input type="submit" value="Add Task" className="btn bg-main text-sub_color" />
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AddProduct;