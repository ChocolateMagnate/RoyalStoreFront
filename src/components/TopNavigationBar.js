import catalog from "./catalog.png"
import list from "./list.png"
import liked from "./liked.png"
import cart from "./cart.png"
import menu from "./menu.png"
import {useState} from "react";
import LeftNavBar from "./LeftNavBar";

export default function TopNavigationBar(){

    const [isVisible, setIsVisible] = useState(false)


    return(

        <div className={"whole-navigation-bar"}>

            <div className={"input-and-button"}>
                <button  className={"menu-button"}> <img src={menu} onClick={() =>{
                    setIsVisible(true)
                }}/></button>
                <button className={"interactive-button"}><img className={"image"} src={catalog}/> </button>
                <input className={"w-52 flex justify-content-center"} type={"text"} placeholder={"Search a product."}/>
                <button className={"search-button-in-topNavigationBar"}>Search</button>
                <button className={"interactive-button ml-5"}> <img className={"image"} src={list}/> </button>
                <button className={"interactive-button"}> <img className={"image"} src={liked}/></button>
                <button className={"interactive-button"}> <img className={"image"} src={cart}/></button>
            </div>;



            <LeftNavBar isVisible = {isVisible} setIsVisible = {setIsVisible}></LeftNavBar>

        </div>
    )

}