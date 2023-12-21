import banner from '../../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero h-auto md:rounded-br-full max-w-full mb-5" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay opacity-85 md:rounded-br-full max-w-full"></div>
            <div className="hero-content text-start text-neutral-content">
                <div className='max-w-4xl'>
                    <h1 className="mb-2 md:mb-3 lg:mb-5 text-2xl md:text-4xl lg:text-6xl font-bold text-sub_color space-y-4">Free</h1>
                    <h1 className="mb-2 md:mb-3 lg:mb-5 text-2xl md:text-4xl lg:text-6xl font-bold text-sub_color space-y-4">Online Task Manager</h1>
                    <p className="mb-5 w-4/5">Empower your productivity journey with our sleek and intuitive task manager — where efficiency meets elegance, and every to-do becomes a step closer to success. Stay organized, stay focused, and unlock the full potential of your day with our task manager designed to elevate your productivity game</p>
                    <button className="btn  btn-sm md:btn-md lg:btn-lg bg-sub_color text-main">Lets Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;