

const WhomUse = () => {
    return (
        <div className="font-poppins w-full md:w-4/5">
            <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center">Our Top Users</h1>
            </div>
            <div className="max-w-5xl mx-auto text-center mt-6 mb-5 ">
                <div className="stats stats-vertical md:stats-horizontal shadow ">

                    <div className="stat">
                        <div className="stat-title">Students</div>
                        <div className="stat-value">9k+</div>
                        <div className="stat-desc">Students thrive on our website.</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Developers</div>
                        <div className="stat-value">12k+</div>
                        <div className="stat-desc">Developers excel on our website.</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Professionals</div>
                        <div className="stat-value">16k+</div>
                        <div className="stat-desc">Professionals accomplish on our website</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhomUse;