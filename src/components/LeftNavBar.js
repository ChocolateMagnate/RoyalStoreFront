import {useState} from "react";
import './LeftNavBar.css';
import menu from "./menu.png";

export default function LeftNavBar(props) {

        const isVisible = props.isVisible
        const setIsVisible = props.setIsVisible;


        return (
            <div className={`navigation-bar ${isVisible ? 'visible' : ''} `}>
                <button className={"button-close"} onClick={() => {
                    setIsVisible(false);
                }}>Close</button>
            </div>
        );
};