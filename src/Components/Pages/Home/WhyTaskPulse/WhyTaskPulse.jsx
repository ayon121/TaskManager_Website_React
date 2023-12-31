
import { MdOutlineTaskAlt } from "react-icons/md";
import whypic from '../../../../assets/images/whyus.jpg'
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const WhyTaskPulse = () => {
    useEffect(()=> {
        Aos.init({duration : 700})
    },[])
    return (
        <div className="hero min-h-screen bg-base-200 mt-4 max-w-7xl mx-auto rounded-3xl md:rounded-l-3xl mb-5 px-4 font-poppins">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src={whypic} data-aos="fade-down" className="max-w-sm w-full hidden md:flex  rounded-lg shadow-2xl" />
                <div >
                    <h1 className="flex justify-center md:justify-start items-center gap-2 text-4xl lg:text-5xl font-bold" data-aos="fade-right">Why 
                    <span>
                    <a className="text-2xl lg:text-4xl text-main flex items-center"><span className="text-4xl lg:text-5xl">Task</span><MdOutlineTaskAlt />Pulse</a>
                    </span>
                    </h1>
                    <img src={whypic} data-aos="fade-down" className="max-w-sm w-full mx-auto mt-3 flex  md:hidden  rounded-lg shadow-2xl" />
                    <p className="py-6">Choose our task manager for a seamless blend of efficiency and user-friendly design. With intuitive features, robust organization tools, and a commitment to enhancing your productivity, we provide the ideal platform for individuals seeking a reliable companion on their journey towards unparalleled task management success. </p>
                    <h1>1.Free To Use</h1>
                    <h1>2.Smart Organization</h1>
                    <h1>3.Time-Saving Features</h1>
                    <h1>4.Reliability and Suppor</h1>

                    <Link to="/login"><button className="btn btn-sm md:btn-md text-sub_color bg-main">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WhyTaskPulse;