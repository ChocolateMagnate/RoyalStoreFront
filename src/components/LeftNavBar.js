import "../styles/LeftNavBar.css";
import {Link} from "react-router-dom";

export default function LeftNavBar(props) {
    const isVisible = props.isVisible
    const setIsVisible = props.setIsVisible;

    return (
        <div className={`navigation-bar ${isVisible ? 'visible' : ''} `}>
            <nav>

            <button className={"button-close"}  onClick={() => {
                setIsVisible(false);
            }}><img src={"/images/cross.png"} alt={"cross"}/></button>
                <div className={"LogAndSign"}>
                    <Link to={"/registration"} className={"sign-up"}>Sign in</Link>
                    <p> || </p>
                    <Link to={"/logIn"} className={"log-in"}>Log in</Link>
                </div>
                <ul className={'list-options'}>
                    <li className={"option"}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={"option"}>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li className={"option"}>
                        <Link to={"/about"}>About</Link>
                        </li>
                </ul>
            </nav>
        </div>
    );
};