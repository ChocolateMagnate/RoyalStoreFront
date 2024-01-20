import TopNavigationBar from "./TopNavigationBar";
import Filter from "./Filter";
import {useSelector} from "react-redux";
import Goods from "./Goods";
import {useState} from "react";
import selectProducts from "../actions/GoodsActions";
import useStartup from "../hooks/useStartup";


export default function Laptops() {
    const goods = useSelector(state => state.goods)
    const [products, setProducts] = useState([]);

    useStartup(() => selectProducts(goods, "laptops", setProducts))

    return (<div>
        <TopNavigationBar/>
        <Filter type={"laptops"}/>
        {products.length > 0 ? <Goods goods={products}/> : <p>No products found</p>}
    </div>)
}