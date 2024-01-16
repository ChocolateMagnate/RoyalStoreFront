import ParticularGoods from "./ParticularGoods";
import {useSelector} from "react-redux";
import {addProductToCart} from "../actions/FetchActions";


export default function Goods(props) {
    const token = useSelector(state => state.user.token)
    const goods = props.goods
    const renderedGoods = goods.map(good => (
        <div className={"goods-field"}>
            <div key={"item"} className={"whole-smartphone-container"}>
                <ParticularGoods photo={good.photo} brand={good.brand} model={good.model}
                                 price={good.price + " UAH"}></ParticularGoods>
                <div className={"buttons"}>
                    <button className={"button-favorites"}>
                        <img src={"/images/liked.png"} alt={"favorites"} className={"image"} onClick={async () => {
                            await addProductToCart(good, token)
                        }}></img>
                    </button>
                    <button className={"button-buy"}>
                        <img src={"/images/cart.png"} alt={"cart"} className={"image"} onClick={async () => {
                            await addProductToCart(good, token)
                        }}/></button>
                </div>
            </div>
        </div>))

    return (
        <div>
            {renderedGoods}
        </div>)
}