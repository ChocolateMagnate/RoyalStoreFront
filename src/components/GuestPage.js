import TopNavigationBar from "./TopNavigationBar";
import CatalogAside from "./CatalogAside";
import GoodsRendering from "./GoodsRendering";
import {useEffect, useState} from "react";
import ParticularGoods from "./ParticularGoods";
import {useSelector} from "react-redux";
import "../styles/ParticularGoods.css"
import ToolsAndAdvs from "./Welcome";


export default function GuestPage() {

    const [goods, setGoods] = useState([]);
    const email = useSelector(state => state.user.email);


    useEffect(() => {
        const query = "http://localhost:8080/get-random-smartphones"
        fetch(query)
            .then(response => response.json())
            .then(goods => setGoods(goods))
        console.log(goods)

    }, [])

    const goodsRendering = goods.map(good => {
        return (
            <div className={"goods-field"}>
                <div className={"whole-smartphone-container"}>
                    <ParticularGoods photo = {good.photo} brand = {good.brand} model = {good.model} price = {good.price + " UAH"}></ParticularGoods>
                    <div className={"buttons"}>
                        <button className={"button-favorites"} > <img src={"liked.png"} alt={"favorites"} className={"image"}></img>

                        </button>
                <button className={"button-buy"}> <img src={"cart.png"} alt={"cart"} className={"image"} onClick={
                    () => {
                        fetch("http://localhost:8080/add-smartphone-to-cart?email="+email, {
                            method: "PUT", body: JSON.stringify(good)
                        }).then(response => console.log(response.status))

                    }
                }/></button>

                    </div>
                </div>
            </div>

        )
    })
console.log(goodsRendering)
    console.log(goods[0])
    return (
        <div>
            <TopNavigationBar></TopNavigationBar>
            <ToolsAndAdvs></ToolsAndAdvs>
            <div className={"flex flex-row"}>
                <CatalogAside></CatalogAside>
                <div className={"goods-field"}>
                {goodsRendering.map((item) => (
                    <div>
                        <div key={"item"}>{item}</div>
                    </div>

                ))}
                </div>
            </div>
        </div>
    )

}