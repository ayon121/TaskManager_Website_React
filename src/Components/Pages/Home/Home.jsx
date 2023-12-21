import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import WhyTaskPulse from "./WhyTaskPulse/WhyTaskPulse";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhyTaskPulse></WhyTaskPulse>
        </div>
    );
};

export default Home;