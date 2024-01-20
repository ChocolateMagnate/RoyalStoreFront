import {useEffect, useState} from "react";
import BoxOfProduct from "./BoxOfProduct";
import useStartup from "../hooks/useStartup";


export  default function Rendering() {
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [productNameSearch, setProductNameSearch] = useState('');
    const [sortOption, setSortOption] = useState("byName");

    useStartup(() => {
        const products = JSON.parse((localStorage.getItem('products')) || []);
        setProducts(products);
        setFilteredProduct(products);
    });


    const executeSearch = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(productNameSearch.toLowerCase())
        );
        setFilteredProduct(filtered);
    }
    useEffect(() => {
        const sortProducts = () => {
            setFilteredProduct((prevFilteredProducts) => {

                const sortedProducts = [...prevFilteredProducts];
                switch (sortOption) {
                    case "byName":
                        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    case "byPriceDecreasing":
                        sortedProducts.sort((a, b) => b.price - a.price);
                        break;
                    case "byPriceIncreasing":
                        sortedProducts.sort((a, b) => a.price - b.price);
                        break;
                    default:
                        break;
                }
                return sortedProducts;
            });
        };
        sortProducts();
    }, [sortOption]);


        return (
            <div>
                <div className={"flex justify-end items-start space-x-1"}>
                    <input className={"rounded-md border border-gray-300 flex justify-end"} type={"text"}
                           placeholder={"Пошук за назвою"}
                           onChange={event => {
                               setProductNameSearch(event.target.value)
                           }}></input>
                <button className={"rounded-md border border-gray-300 "} onClick={executeSearch}>Search</button>
            </div>
                <div className={"flex space-x-1 justify-end"}>
                <p className={""}>Сортувати за: </p>
                <select className={"rounded-md border border-gray-300 flex"}
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}>
                    <option value={"byName"}>За ім'ям</option>
                    <option value={"byPriceDecreasing"}>За ціною(спадання)</option>
                    <option value={"byPriceIncreasing"}>За ціною(зростання)</option>
                </select>
                </div>
                <div className={"flex flex-col space-y-2"}>
                {filteredProduct.length > 0 ? (
                    filteredProduct.map((product) => (
                        <BoxOfProduct
                            key={product.name}
                            name={product.name}
                            price={product.price}
                            producer={product.producer}
                            description={product.description}
                            category={product.category}
                        ></BoxOfProduct>
                    ))
                ) : (<p>Нема збігів.</p>
                )
                }
            </div>
            </div>
        )
}