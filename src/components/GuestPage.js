import TopNavigationBar from "./TopNavigationBar";
import CatalogAside from "./CatalogAside";
import {useEffect, useState} from "react";
import ParticularGoods from "./ParticularGoods";
import {useDispatch, useSelector} from "react-redux";
import "../styles/ParticularGoods.css"
import ToolsAndAdvs from "./Welcome";
import {tryLogin} from "../actions/UserActions";
import "../styles/Pagination.css"

function getDefaultProducts(setProducts) {
    let goods = []
    const query = "http://localhost:8080/get-random-products"
    fetch(query)
        .then(response => response.json())
        .then(respondedGoods => {
            console.log(respondedGoods)
            setProducts(respondedGoods)
        })
}

function getProductsFromSearch(search, setProducts) {
    const query = "http://localhost:8080/search-products-by-search&search=" + search
    fetch(query)
        .then(response => response.json())
        .then(respondedGoods => {
            setProducts(respondedGoods)
        })
}

function getProductsFromParameters(parameters, setProducts) {
    let query = "http://localhost:8080/get-products"
    for (const parameter in parameters)
        query += "&" + parameter + "=" + parameters[parameter]
    fetch(query)
        .then(response => response.json())
        .then(respondedGoods => {
            console.log(respondedGoods)
            setProducts(respondedGoods)
        })
}

export default function GuestPage(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const email = useSelector(state => state.user.email);
    const token = useSelector(state => state.user.token);
    const goods = useSelector(state => state.goods);

    const [currentPage, setCurrentPage] = useState(1);
    const goodsPerPage = 8;

    const lastIndex= currentPage * goodsPerPage;
    const firstIndex = lastIndex - goodsPerPage;

    const goodsToRender = products.slice(firstIndex, lastIndex);
    const pages = Math.ceil(products.length / goodsPerPage);
    const pageNumbers = [...(new Array(pages).keys())].map(i => i + 1);

    const handleClick = (number) => {
        setCurrentPage(number)
    }

    useEffect(() => {
        dispatch(tryLogin())
    }, []);

    useEffect(() => {
        if (goods.isSearching) getProductsFromSearch(goods.text, setProducts)
        else if (goods.parameters != null && goods.parameters.length !== 0)
            getProductsFromParameters(goods.parameters, setProducts)
        else getDefaultProducts(setProducts)
    }, [goods.isSearching, goods.parameters, goods.text])

    const goodsRendering = goodsToRender.map(good =>
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
        </div>
    )
}