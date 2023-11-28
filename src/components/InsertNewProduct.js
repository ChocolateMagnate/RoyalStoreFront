import {useState} from "react";


export default function InsertNewProduct(){
    const [name, setName] = useState();

    const [price, setPrice] = useState();

    const [producer, setProducer] = useState()

    const [description, setDescription] = useState()

    const [category, setCategory] = useState()

    return(
        <div className={"container"}>
            <div>
                <p id={"text-1"}>Назва:</p>
                <input type={"text"} id={"input-1"} onChange={(event) => {
                setName(event.target.value)}
                }></input>
            </div>
            <div>
                <p id={"text-1"}>Ціна:</p>
                <input type={"text"} id={"input-1"} onChange={(event) => {
                    setPrice(event.target.value)}
                }></input>
            </div>
            <div>
                <p id={"text-1"}>Виробник:</p>
                <input type={"text"} id={"input-1"} onChange={(event) => {
                    setProducer(event.target.value)}
                }></input>
            </div>
            <div>
                <p id={"text-1"}>Короткий опис:</p>
                <input type={"text"} id={"input-1"} onChange={(event) => {
                    setDescription(event.target.value)}
                }></input>
            </div>
            <div>
                <p id={"text-1"}>Категорія:</p>
                <input type={"text"} id={"input-1"} onChange={(event) => {
                    setCategory(event.target.value)}
                }></input>
            </div>
            <div>
                <button id={"button-1"} onClick={() => {
                    const products = JSON.parse(localStorage.getItem('products')) || [];
                    const newProducts = {
                    name: name,
                    price:price,
                    producer:producer,
                    description:description,
                    category:category
                    };
                    if(products == null && products === undefined) {
                        localStorage.setItem("products", JSON.stringify([newProducts]))
                    } else {
                    products.push(newProducts)
                        localStorage.setItem("products", JSON.stringify(products))
                    }

                }}>Додати товар</button>
            </div>
        </div>
    )
}

