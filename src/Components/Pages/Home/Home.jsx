import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import WhomUse from "./WhomUse/WhomUse";
import WhyTaskPulse from "./WhyTaskPulse/WhyTaskPulse";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhomUse></WhomUse>
            <WhyTaskPulse></WhyTaskPulse>
        </div>
    );
};

export default Home;