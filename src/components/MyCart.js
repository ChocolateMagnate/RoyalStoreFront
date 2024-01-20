import {useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/MyCart.css"
import {fetchCart, removeProductFromCart} from "../actions/FetchActions";
import useStartup from "../hooks/useStartup";


export default function MyCart() {
    const [goods, setGoods] = useState([]);
    const user = useSelector(state => state.user);

    useStartup( () =>
        fetchCart(user.email, user.token).then(respondedGoods => setGoods(respondedGoods))
    )

    const deleteGood = async (good) => {
        const updatedGoods = goods.filter(g => g.id !== good.id)
        setGoods(updatedGoods)
        await removeProductFromCart(user, good)
    }

    const goodsRendering = goods.map(good =>
        <div className={"smartphone"}>
            <ParticularGoods photo = {good.photo} model = {good.model} price = {good.price} brand = {good.brand}></ParticularGoods>
            <div className={"buttons-cart"}>
                <button className={"delete-button"}>
                    <img className={"image-1"} src={"/images/cross.png" } alt={"delete"} onClick={() => deleteGood(good)}/>
                </button>
                <button className={"purchase-button"}>
                    <img className={"image-1"} src={"/images/cart.png" } alt={"purchase"}/>
                </button>
            </div>
        </div>)

    return (
        <div>
            <TopNavigationBar/>
            <h1 className={"cart-title"}>Your products</h1>
            <div className={"render-smartphones"}>
                {goodsRendering.map((item) => (
                    <div className={"smartphones"}>
                        <div key={"item"}>{item}</div>
                    </div>
                ))}
            </div>
        </div>)
}