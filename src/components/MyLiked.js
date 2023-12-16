import TopNavigationBar from "./TopNavigationBar";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";


export default function MyLiked() {
    const [goods, setGoods] = useState([]);
    const user = useSelector(state => state.user);

    useEffect(() => {
        fetch("http://localhost:8080/get-liked?email=" + user.email,
            {headers: {"Authorization": "Bearer " + user.token}})
            .then(response => response.json())
            .then(goods => setGoods(goods))
    }, []);

    const goodsRendering = goods.map(good =>
        <div>
            <ParticularGoods photo = {good.photo} model = {good.model} price = {good.price} brand = {good.brand} ></ParticularGoods>
        </div>
    )
    return (
        <div>
            <TopNavigationBar></TopNavigationBar>
            {goodsRendering}
        </div>
    )
}