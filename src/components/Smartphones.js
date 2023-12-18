import TopNavigationBar from "./TopNavigationBar";
import Filter from "./Filter";
import {useSelector} from "react-redux";
import Goods from "./Goods";
import {useEffect, useState} from "react";
import selectProducts from "../actions/GoodsActions";


export default function Smartphones() {
    const goods = useSelector(state => state.goods)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        selectProducts(goods, "smartphones", setProducts)
        console.log(products)
    }, [goods]);

    return (<div>
            <TopNavigationBar/>
            <Filter/>
            {products.length > 0 ? <Goods goods={products}/> : <p>No products found</p>}
        </div>)
}