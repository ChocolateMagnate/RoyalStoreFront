
import {useState} from "react";
import LeftNavBar from "./LeftNavBar";

export default function TopNavigationBar(){

    const [isVisible, setIsVisible] = useState(false)


    return(

        <div className={"whole-navigation-bar"}>

            <div className={"input-and-button"}>
                <button  className={"menu-button"}> <img src={"/menu.png"} onClick={() =>{
                    setIsVisible(true)
                }} alt={"menu"}/></button>
                <button className={"interactive-button"}><img className={"image"} src={"/catalog.png"} alt={"catalog"}/> </button>
                <input className={"w-52 flex justify-content-center"} type={"text"} placeholder={"Search a product."}/>
                <button className={"search-button-in-topNavigationBar"}>Search</button>
                <button className={"interactive-button ml-5"}> <img className={"image"} src={"/list.png"} alt={"list"}/> </button>
                <button className={"interactive-button"}> <img className={"image"} src={'/liked.png'} alt={"linked"}/></button>
                <button className={"interactive-button"}> <img className={"image"} src={"/cart.png"} alt={"cart"}/></button>
            </div>;



            <LeftNavBar isVisible = {isVisible} setIsVisible = {setIsVisible}></LeftNavBar>

        </div>
    )

}