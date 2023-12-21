import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import Question from "./FAQ/Question";
import WhomUse from "./WhomUse/WhomUse";
import WhyTaskPulse from "./WhyTaskPulse/WhyTaskPulse";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhomUse></WhomUse>
            <WhyTaskPulse></WhyTaskPulse>
            <Question></Question>
            <Footer></Footer>
        </div>
    );
};

export default Home;