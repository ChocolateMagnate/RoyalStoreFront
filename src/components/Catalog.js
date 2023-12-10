import "../styles/Catalog.css";
import {Link} from "react-router-dom";

export default function Catalog(props) {

    const catalog = props.catalog
    const setCatalog = props.setCatalog

    return (
        <div className={`catalog-menu ${catalog ? 'visible' : ''}` }>
            <button className={"close-catalog"} onClick={
                () => {
                    setCatalog(false)
                }
            }><img src={"/cross.png"} alt={"cross"}/></button>
            <div className={"catalog-content"}>
        <ul className={"catalog-list"}> <div className={"header-ul"}>Phones</div>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Poco</li>
            <li>Xiaomi</li>
            <li>Redmi</li>
        </ul>
                <ul className={"catalog-list"}> <div className={"header-ul"}>Laptops</div>
            <li>Apple</li>
            <li>Asus</li>
            <li>Lenovo</li>
            <li>HP</li>
            <li>Dell</li>
        </ul>

            </div>
        </div>
    )
}