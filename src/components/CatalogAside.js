import "../styles/CatalogAside.css"
import {Link} from "react-router-dom";

export default function CatalogAside() {
    return (
        <div className={"catalog-aside"}>
            <h1>Каталог</h1>
            <ul className={"list-goods"}> <Link to={"/smartphones"}>Смартфони</Link>
                <li>
                    <Link to={"/phonesApple"}>Apple</Link>
                </li>
                <li>Samsung</li>
                <li>Poco</li>
                <li>Xiaomi</li>
                <li>Redmi</li>
            </ul>
            <ul className={"list-goods"}> Ноутбуки
                <button><li>Apple</li></button>
                <button><li>Lenovo</li></button>
                <button><li>Dell</li></button>
                <button><li>HP</li></button>
                <button><li>Asus</li></button>
            </ul>
        </div>
    )
}