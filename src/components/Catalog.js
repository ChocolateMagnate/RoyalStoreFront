import './Catalog.css';

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
            <div>
            </div>
        </div>
    )
}