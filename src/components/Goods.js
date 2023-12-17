import ParticularGoods from "./ParticularGoods";
import {useSelector} from "react-redux";


export default function Goods(props) {
    const email = useSelector(state => state.user.email)
    const token = useSelector(state => state.user.token)
    const goods = props.goods
    const renderedGoods = goods.map(good => (
        <div className={"goods-field"}>
            <div key={"item"} className={"whole-smartphone-container"}>
                <ParticularGoods photo={good.photo} brand={good.brand} model={good.model}
                                 price={good.price + " UAH"}></ParticularGoods>
                <div className={"buttons"}>
                    <button className={"button-favorites"}>
                        <img src={"/liked.png"} alt={"favorites"} className={"image"} onClick={() => {
                            const query = "http://localhost:8080/add-product-to-liked?email="
                                + email + "&id=" + good.id
                            fetch(query, {method: "PUT", headers: {"Authorization": "Bearer " + token},
                                body: JSON.stringify(good)})
                                .then(response => console.log(response.status))

                        }}></img>
                    </button>
                    <button className={"button-buy"}>
                        <img src={"/cart.png"} alt={"cart"} className={"image"} onClick={() => {
                            const query = "http://localhost:8080/add-product-to-cart?email="
                                + email + "&id=" + good.id
                            fetch(query, {method: "PUT", headers: {"Authorization": "Bearer " + token},
                                body: JSON.stringify(good)})
                                .then(response => console.log(response.status))
                        }}/></button>
                </div>
            </div>
        </div>)
    )

    return (
        <div>
            {renderedGoods}
        </div>
    )
}