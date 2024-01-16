import "../styles/Catalog.css";

export default function Catalog(props) {

    const catalog = props.catalog
    const setCatalog = props.setCatalog

    return (
        <div className={`catalog-menu ${catalog ? 'visible' : ''}` }>
            <button className={"close-catalog"} onClick={
                () => {
                    setCatalog(false)
                }
            }><img src={"/images/cross.png"} alt={"cross"}/></button>
            <div className={"catalog-content"}>
            <ul className={"catalog-list"}>
                <div className={"header-ul"}>Phones</div>
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
        </div>)
}