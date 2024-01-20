import TopNavigationBar from "./TopNavigationBar";
import {useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";
import {fetchLiked} from "../actions/FetchActions";
import useStartup from "../hooks/useStartup";


export default function MyLiked() {
    const [goods, setGoods] = useState([]);
    const user = useSelector(state => state.user);

    useStartup(() =>
        fetchLiked(user).then(respondedGoods => setGoods(respondedGoods))
    );

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