import {useState} from "react";
import {useSelector} from "react-redux";


export default function Dashboard() {
    const [name, setName] = useState("");
    const [producer, setProducer] = useState("");
    const [price, setPrice] = useState("");
    const [memory, setMemory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");

    const token = useSelector(state => state.user.token)


    return(
        <div className={"dashboard"}>
            <h1>Dashboard</h1>
            <input type="text" placeholder={"name"} onChange={(event) => event.target.value}/>
            <input type="text" placeholder={"producer"} onChange={(event) => event.target.value}/>
            <input type="number" placeholder={"price"} onChange={(event) => event.target.value}/>
            <input type="number" placeholder={"memory"} onChange={(event) => event.target.value}/>
            <input type="text" placeholder={"description"} onChange={(event) => event.target.value}/>
            <input type="file" alt={"phone-image"} onChange={(event) => event.target.value} />
            <button onClick={() => {
                const query = "http://localhost:8080/create-smartphone"
                const form = {
                    name: name,
                    brand: producer,
                    price: price,
                    memory: memory,
                    description: description,
                    photo: image
                }
                fetch(query, {method: "PUT", headers: {'Authorization':"Bearer "+token,'Content-Type':'application/json'}, body: JSON.stringify(form)}).then(response => {
                    if (response.status === 200) {
                        console.log("Product inserted successfully.")
                        setMessage("Product inserted successfully.")
                    } else {
                        console.log("Something went wrong. Please try again later.")
                        setMessage("Something went wrong. Please try again later.")
                    }
                })
            }
            }>Insert</button>
            {message && <p>{message}</p>}
        </div>
    )


}