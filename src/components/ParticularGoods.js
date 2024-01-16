import "../styles/ParticularGoods.css"

export default function ParticularGoods(props){
    const photo = props.photo;
    const model = props.model;
    const brand = props.brand;
    const price = props.price;

    return (
        <div>
            <div className={"smartphone-container"}>
                <img src={`data:image/jpeg;base64,${photo}`} alt="phone" className={"photos"}/>
                <h3>{model}</h3>
                <h3>{brand}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
}