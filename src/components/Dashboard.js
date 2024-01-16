import {useState} from "react";
import {useSelector} from "react-redux";
import {submitSmartphone} from "../actions/FetchActions";


export default function Dashboard() {
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [memory, setMemory] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(new File([], ""));
    const [os, setOs] = useState("");
    const [message, setMessage] = useState("");
    const token = useSelector(state => state.user.token)


    return (
        <div className={"dashboard"}>
            <h1>Dashboard</h1>
            <input type="text" placeholder={"Model"} onChange={(event) => setModel(event.target.value)}/>
            <input type="text" placeholder={"Brand"} onChange={(event) => setBrand(event.target.value)}/>
            <input type="number" placeholder={"Price"} onChange={(event) => setPrice(event.target.value)}/>
            <input type="number" placeholder={"Memory"} onChange={(event) => setMemory(event.target.value)}/>
            <input type="text" placeholder={"Operating system"} onChange={(event) => setOs(event.target.value)}/>
            <input type="text" placeholder={"Description"} onChange={(event) => setDescription(event.target.value)}/>
            <input type="file" alt={"phone-image"} onChange={(event) => setPhoto(event.target.files[0])} />
            <button onClick={async () => {
                const smartphone = {
                    model: model,
                    brand: brand,
                    price: price,
                    memory: memory,
                    os: os,
                    description: description,
                    photo: photo
                }
                const status = await submitSmartphone(smartphone, token)
                switch (status) {
                    case 200:
                        setMessage("Product inserted successfully.")
                        break
                    case 302:
                        setMessage("The product already exists.")
                        break
                    case 400:
                        setMessage("The product could not be inserted.")
                        break
                    default:
                        setMessage("Something went wrong. Please try again later.")
                }
            }}>Insert</button>
            {message && <p>{message}</p>}
        </div>)
}