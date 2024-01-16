import TopNavigationBar from "./TopNavigationBar";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";
import {fetchLiked} from "../actions/FetchActions";


export default function MyLiked() {
    const [goods, setGoods] = useState([]);
    const user = useSelector(state => state.user);

    useEffect(() => {
        async function getGoods() {
            setGoods(await fetchLiked(user))
        }
        getGoods()
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