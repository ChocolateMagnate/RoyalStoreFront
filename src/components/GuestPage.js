import TopNavigationBar from "./TopNavigationBar";
import CatalogAside from "./CatalogAside";
import {useEffect, useState} from "react";
import ParticularGoods from "./ParticularGoods";
import {useDispatch, useSelector} from "react-redux";
import "../styles/ParticularGoods.css"
import ToolsAndAdvs from "./Welcome";
import {tryLoginOnPageLoad} from "../actions/UserActions";
import "../styles/Pagination.css"
import {
    addProductToCart,
    addProductToLiked,
    fetchProductsByParameters,
    fetchProductsFromSearch,
    fetchRandomProducts
} from "../actions/FetchActions";
import useStartup from "../hooks/useStartup";


async function getProductsToDisplay(goods) {
    if (goods.isSearching) return await fetchProductsFromSearch(goods.text)
    else if (goods.parameters != null && goods.parameters.length !== 0)
        return await fetchProductsByParameters(goods.parameters)
    else return await fetchRandomProducts()
}


export default function GuestPage() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const token = useSelector(state => state.user.token);
    const goods = useSelector(state => state.goods);

    const [currentPage, setCurrentPage] = useState(1);
    const goodsPerPage = 8;

    const lastIndex= currentPage * goodsPerPage;
    const firstIndex = lastIndex - goodsPerPage;

    console.log(products)
    const goodsToRender = products.slice(firstIndex, lastIndex);
    const pages = Math.ceil(products.length / goodsPerPage);
    const pageNumbers = [...(new Array(pages).keys())].map(i => i + 1);

    const handleClick = (number) => {
        setCurrentPage(number)
    }

    useStartup(() => {
        dispatch(tryLoginOnPageLoad())
    });

    useEffect(() => {
        getProductsToDisplay(goods).then(respondedGoods => setProducts(respondedGoods))
    }, [goods])

    const goodsRendering = goodsToRender.map(good =>
        <div className={"goods-field"}>
            <div key={"item"} className={"whole-smartphone-container"}>
                <ParticularGoods photo={good.photo} brand={good.brand} model={good.model}
                                 price={good.price + " UAH"}></ParticularGoods>
                <div className={"buttons"}>
                    <button className={"button-favorites"}>
                        <img src={"/images/liked.png"} alt={"favorites"} className={"image"} onClick={async () => {
                            await addProductToLiked(good, token)
                        }}></img>
                    </button>
                    <button className={"button-buy"}>
                        <img src={"/images/cart.png"} alt={"cart"} className={"image"} onClick={async () => {
                            await addProductToCart(good, token)
                        }}/></button>
                </div>
            </div>
        </div>)

    return (
        <div>
            <TopNavigationBar></TopNavigationBar>
            <ToolsAndAdvs></ToolsAndAdvs>
            <div className={"flex flex-row"}>
                <CatalogAside></CatalogAside>
                <div>
                    <div className={"goods-field"}>
                        {goodsRendering}
                    </div>
                    {pages>1 && (
                        <div className={"pagination"}>
                            {pageNumbers.map(number => (
                                <div
                                    className={`page-number ${currentPage === number ? "active" : ''}`}
                                    onClick={() => handleClick(number)}
                                    key={number}>
                                    <div>{number}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>)
}