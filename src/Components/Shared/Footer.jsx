
import { MdOutlineTaskAlt } from "react-icons/md";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content border-t-4 border-double border-main">
                <aside>
                    <a className=" text-xl text-main flex items-center"><span className="text-2xl">Task</span><MdOutlineTaskAlt />Pulse</a>
                    <p>TaskPulse Company LTd<br />Providing reliable service since 2022</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <a href="https://github.com/ayon121" target="blank" className="link link-hover">Github</a>
                    <a href="https://www.linkedin.com/in/ayon-saha/" target="blank" className="link link-hover">Linkedin</a>
                    <a href="https://www.linkedin.com/in/ayon-saha/" target="blank" className="link link-hover">Facebook</a>
                </nav>
                <form className="w-2/4">
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join ">
                            <input type="text" placeholder="username@site.com" className="join-item px-2 " />
                            <button className="btn  bg-main text-sub_color join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
        </div>
    );
};

export default Footer;