import {useState} from "react";
import './LeftNavBar.css';
import menu from "./menu.png";
import { Link } from "react-router-dom";

export default function LeftNavBar(props) {

        const isVisible = props.isVisible
        const setIsVisible = props.setIsVisible;


        return (
            <div className={`navigation-bar ${isVisible ? 'visible' : ''} `}>
                <button className={"button-close"} onClick={() => {
                    setIsVisible(false);
                }}>Close</button>
                <nav>
                    <ul>
                        <li>
                            hui
                        </li>
                        <li>
                            zalupa
                        </li>
                        <li>

                        </li>
                    </ul>
                </nav>
            </div>
        );
};