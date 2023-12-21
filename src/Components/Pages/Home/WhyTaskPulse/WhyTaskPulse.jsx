
import { MdOutlineTaskAlt } from "react-icons/md";
import whypic from '../../../../assets/images/whyus.jpg'

const WhyTaskPulse = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-4 max-w-7xl mx-auto rounded-l-3xl mb-5 px-4 font-poppins">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={whypic} className="max-w-sm w-4/5  rounded-lg shadow-2xl" />
                <div>
                    <h1 className="flex items-center gap-2 text-2xl md:text-4xl lg:text-5xl font-bold">Why 
                    <span>
                    <a className=" text-xl md:text-2xl lg:text-4xl text-main flex items-center"><span className="text-2xl md:text-4xl lg:text-5xl">Task</span><MdOutlineTaskAlt />Pulse</a>
                    </span>
                    </h1>
                    <p className="py-6">Choose our task manager for a seamless blend of efficiency and user-friendly design. With intuitive features, robust organization tools, and a commitment to enhancing your productivity, we provide the ideal platform for individuals seeking a reliable companion on their journey towards unparalleled task management success. </p>
                    <h1>1.Free To Use</h1>
                    <h1>2.Smart Organization</h1>
                    <h1>3.Time-Saving Features</h1>
                    <h1>4.Reliability and Suppor</h1>

                    <button className="btn btn-sm md:btn-md text-sub_color bg-main">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default WhyTaskPulse;