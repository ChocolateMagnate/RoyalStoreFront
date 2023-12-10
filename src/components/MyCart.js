import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";
import TopNavigationBar from "./TopNavigationBar";


export default function MyCart() {

    const [goods, setGoods] = useState([]);
    const email = useSelector(state => state.user.email);
    const user = useSelector(state => state.user);

    console.log(user);

    useEffect(() => {
        fetch("http://localhost:8080/get-cart?email="+email)
            .then(response => response.json())
            .then(goods => setGoods(goods))
    }, [])

    const goodsRendering = goods.map(good => {
        return (
            <div>
                <TopNavigationBar></TopNavigationBar>
                <ParticularGoods photo = {good.photo} model = {good.model} price = {good.price} brand = {good.brand} ></ParticularGoods>
            </div>
        )

    })
    console.log(goods);

    return (
        <div>
            {goodsRendering.map((item) => (
                <div>
                    <div key={"item"}>{item}</div>
                </div>
            ))}
        </div>
    )
}