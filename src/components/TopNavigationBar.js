
import {useState} from "react";
import LeftNavBar from "./LeftNavBar";
import {Link} from "react-router-dom";
import Catalog from "./Catalog";

export default function TopNavigationBar(){

    const [isVisible, setIsVisible] = useState(false)
    const [catalog, setCatalog] = useState(false)


    return(

        <div className={"whole-navigation-bar"}>

            <div className={"input-and-button"}>
                <button  className={"menu-button"}> <img src={"/menu.png"} onClick={() =>{
                    setIsVisible(true)
                }} alt={"menu"}/></button>
                <button className={"interactive-button"} ><img className={"image"} src={"/catalog.png"} alt={"catalog"} onClick={
                    () => {
                        setCatalog(true)
                    }
                }/>
                </button>
                <input className={"w-52 flex justify-content-center"} type={"text"} placeholder={"Search a product."}/>
                <button className={"search-button-in-topNavigationBar"}>Search</button>
                <button className={"interactive-button ml-5"}>
                <Link to={"/orderedAlready"}><img className={"image"} src={"/list.png"} alt={"list"}/></Link>
                </button>
                <button className={"interactive-button"}>
                <Link to={"/myLiked"}><img src={"/liked.png"} alt={"linked"} className={"image"}/></Link>
                </button>
                <button className={"interactive-button"}>
                    <Link to={"/myCart"}><img src={"/cart.png"} alt={"cart"} className={"image"}/></Link>
                </button>
            </div>;


            <Catalog catalog = {catalog} setCatalog = {setCatalog}></Catalog>
            <LeftNavBar isVisible = {isVisible} setIsVisible = {setIsVisible}></LeftNavBar>

        </div>
    )

}