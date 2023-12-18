import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ParticularGoods from "./ParticularGoods";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/MyCart.css"


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

    const deleteGood = (good) => {
        const updatedGoods = goods.filter(g => g.id !== good.id);
        setGoods(updatedGoods);
        fetch("http://localhost:8080/remove-product-from-cart?email=" + user.email + "&id=" + good.id ,{
            method: "DELETE",
            headers: {"Authorization": "Bearer " + user.token},
            body: JSON.stringify(good)
        }).then(response => response.json())
            .catch(error => console.log(error))
        }



    const goodsRendering = goods.map(good =>
            <div className={"smartphone"}>
                <ParticularGoods photo = {good.photo} model = {good.model} price = {good.price} brand = {good.brand} ></ParticularGoods>
                <div className={"buttons-cart"}>
                    <button className={"delete-button"}><img className={"image-1"} src={"cross.png" } alt={"delete"} onClick={() => deleteGood(good)}/></button>
                    <button className={"purchase-button"}><img className={"image-1"} src={"cart.png" } alt={"purchase"}/></button>
                </div>

            </div>
        )
    console.log(goods);

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

        </div>
    )
}