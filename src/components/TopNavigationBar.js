import {useEffect, useState} from "react";
import LeftNavBar from "./LeftNavBar";
import {Link} from "react-router-dom";
import Catalog from "./Catalog";
import {useDispatch} from "react-redux";

export default function TopNavigationBar() {
    const [isVisible, setIsVisible] = useState(false)
    const [catalog, setCatalog] = useState(false)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "SEARCH", text: search})
    }, [dispatch, search]);

    return (
        <div className={"whole-navigation-bar"}>
            <Link to={"/"}><img src={"images/1.png"} alt={"logo"} className={"logo"}/></Link>
            <div className={"input-and-button"}>
                <button className={"menu-button"}><img src={"images/menu.png"} onClick={() => {
                    setIsVisible(true)
                }} alt={"menu"}/></button>
                <button className={"interactive-button"}>
                    <img className={"image"} src={"images/catalog.png"} alt={"catalog"}
                         onClick={() => {
                            setCatalog(true)
                        }
                    }/>
                </button>
                <input className={"w-52 flex justify-content-center input-search"} type={"text"} placeholder={"Search a product."}
                       onChange={(e) => {
                            setSearch(e.target.value)
                       }}/>
                <button className={"search-button-in-topNavigationBar"}>Search</button>
                <button className={"interactive-button ml-5"}>
                    <Link to={"/orderedAlready"}><img className={"image"} src={"images/list.png"} alt={"list"}/></Link>
                </button>
                <button className={"interactive-button"}>
                    <Link to={"/myLiked"}><img src={"images/liked.png"} alt={"linked"} className={"image"}/></Link>
                </button>
                <button className={"interactive-button"}>
                    <Link to={"/myCart"}><img src={"images/cart.png"} alt={"cart"} className={"image"}/></Link>
                </button>
            </div>
            <Catalog catalog={catalog} setCatalog={setCatalog}></Catalog>
            <LeftNavBar isVisible={isVisible} setIsVisible={setIsVisible}></LeftNavBar>
        </div>
    )
}