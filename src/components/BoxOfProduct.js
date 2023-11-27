

export default function BoxOfProduct(props) {
    const name = props.name
    const price = props.price
    const producer = props.producer
    const description = props.description
    const category = props.category

    return(
        <div>
            <div className={"rounded-md border border-gray-300 p-4 w-52 font-extrabold"}>

                <h1 className={"flex-item"}>Назва: {name}</h1>
                <p className={"flex-item"}>Ціна: {price}</p>
                <p className={"flex-item"}>Виробник: {producer}</p>
                <p className={"flex-item"}>Опис: {description}</p>
                <p className={"flex-item"}>Категорія: {category}</p>
            </div>

        </div>
    )
}