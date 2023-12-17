import TopNavigationBar from "./TopNavigationBar";
import CatalogAside from "./CatalogAside";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../styles/ParticularGoods.css"
import ToolsAndAdvs from "./Welcome";
import {tryLogin} from "../actions/UserActions";
import selectProducts from "../actions/GoodsActions";
import Goods from "./Goods";

export default function GuestPage() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const goods = useSelector(state => state.goods);

    useEffect(() => {
        dispatch(tryLogin())
    }, []);

    useEffect(() => {
        selectProducts(goods, "products", setProducts)
    }, [goods, goods.isSearching, goods.parameters, goods.text])


    return (
        <div>
            <TopNavigationBar></TopNavigationBar>
            <ToolsAndAdvs></ToolsAndAdvs>
            <div className={"flex flex-row"}>
                <CatalogAside></CatalogAside>
                <Goods goods={products}></Goods>
            </div>
        </div>
    )
}