

const Question = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center">FAQ</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-5 mb-8">
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What is TaskPulse?
                    </div>
                    <div className="collapse-content">
                        <p>It is a task manager website. TaskPulse: Empowering tasks effortlessly for students, developers, and professionals.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How do I get started with TaskPulse?
                    </div>
                    <div className="collapse-content">
                        <p>To create an account, all you need to do is enter your email address, confirm it, and that’s it! Your TaskPulse account is ready to use.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What devices can  I  use TaskPulse on?
                    </div>
                    <div className="collapse-content">
                        <p>You can use TaskPulse in any browser, as a desktop app (for Windows or Mac), or as a mobile app (for iOS or Android).</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Will my data be safe with TaskPulse?
                    </div>
                    <div className="collapse-content">
                        <p>As safe as can be. TaskPulse stores data in 17 data centers and 600 servers in North America and Europe, depending on the country you are in. All of our data collecting and handling procedures are fully GDPR-compliant.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Question;