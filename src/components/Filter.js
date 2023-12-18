import {useDispatch} from "react-redux";
import {useState} from "react";


export default function Filter() {

    const dispatch = useDispatch()
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState("")
    const [memory, setMemory] = useState("")
    const [model, setModel] = useState("")
    const [os, setOs] = useState("")

    return (<div>
        <div className={"filter"}>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Price:</label>
                <input className={"filter-input"} type={"number"} min={0} onChange={(e) => {
                    setPrice(e.target.value)
                }}/>
                {price}
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Brand:</label>
                <input className={"filter-input"} type={"text"} onChange={(e) => {
                    setBrand(e.target.value)
                }}/>
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Memory:</label>
                <input className={"filter-input"} type={"checkbox"} onChange={(e) => {
                    setMemory(e.target.value)
                }}/>
                {memory}
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Model:</label>
                <input className={"filter-input"} type={"text"} onChange={(e) => {
                    setModel(e.target.value)
                }}/>
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>OS:</label>
                <input className={"filter-input"} type={"text"} onChange={(e) => {
                    setOs(e.target.value)
                }}/>
            </div>
            <button className={"filter-button"} onClick={() => {
                dispatch({type: "FILTER", payload: { price: price, brand: brand, memory: memory,
                        model: model, os: os }})
            }}>Filter
            </button>
        </div>
    </div>)
}