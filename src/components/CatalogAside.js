import "../styles/CatalogAside.css"
import {Link} from "react-router-dom";

export default function CatalogAside() {
    return (
        <div className={"catalog-aside"}>
            <h1 className={"flex justify-start"}>Каталог</h1>
            <ul className={"list-goods category"}> <Link to={"/smartphones"}> <div className={"ul-text"}>Смартфони >></div></Link>
                <li>
                    <Link to={"/phonesApple"}>Apple</Link>
                </li>
                <li>Samsung</li>
                <li>Poco</li>
                <li>Xiaomi</li>
                <li>Redmi</li>
            </ul>
            <ul className={"list-goods category"}><Link to={"/laptops"}><div className={"ul-text"}>Ноутбуки >></div></Link>
                <button><li>Apple</li></button>
                <button><li>Lenovo</li></button>
                <button><li>Dell</li></button>
                <button><li>HP</li></button>
                <button><li>Asus</li></button>
            </ul>
        </div>
    )
}