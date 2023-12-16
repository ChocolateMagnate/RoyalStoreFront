import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";
import TopNavigationBar from "./TopNavigationBar";


export default function MyCart() {

    const [goods, setGoods] = useState([]);
    const user = useSelector(state => state.user);

    console.log(user);

    useEffect(() => {
        fetch("http://localhost:8080/get-cart?email=" + user.email,
                {headers: {"Authorization": "Bearer " + user.token}})
            .then(response => response.json())
            .then(goods => setGoods(goods))
    }, [])

    const goodsRendering = goods.map(good =>
            <div>
                <TopNavigationBar></TopNavigationBar>
                <ParticularGoods photo = {good.photo} model = {good.model} price = {good.price} brand = {good.brand} ></ParticularGoods>
            </div>
        )
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