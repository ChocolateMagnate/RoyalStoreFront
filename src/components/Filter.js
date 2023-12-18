import {useDispatch} from "react-redux";
import {useState} from "react";


export default function Filter(props) {
    const type = props.type
    const dispatch = useDispatch()
    const [upperPriceBond, setUpperPriceBond] = useState(0)
    const [lowerPriceBond, setLowerPriceBond] = useState(0)
    const [brand, setBrand] = useState("")
    const [memory, setMemory] = useState("")
    const [model, setModel] = useState("")
    const [os, setOs] = useState("")

    return (<div>
        <div className={"filter"}>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Upper price:</label>
                <input className={"filter-input"} type={"range"} min={0} max={10000} onChange={(e) => {
                    setUpperPriceBond(e.target.value)
                }}/>
                {upperPriceBond}
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Lower price:</label>
                <input className={"filter-input"} type={"range"} min={0} max={10000} onChange={(e) => {
                    setLowerPriceBond(e.target.value)
                }}/>
                {lowerPriceBond}
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Brand:</label>
                { type === "smartphones" ? <select onChange={(e) => setBrand(e.target.value)}>
                    <option value={"Apple"}>Apple</option>
                    <option value={"Samsung"}>Samsung</option>
                    <option value={"Xiaomi"}>Xiaomi</option>
                    <option value={"Redmi"}>Redmi</option>
                    <option value={"Poco"}>Poco</option>
                </select> : <select onChange={(e) => setBrand(e.target.value)}>
                    <option value={"Windows"}>Windows</option>
                    <option value={"Mac"}>Mac</option>
                    <option value={"Linux"}>Linux</option>
                </select>}
            </div>
            <div className={"filter-field"}>
                <label className={"filter-label"}>Memory:</label>
                <select onChange={(e) => setMemory(e.target.value)}>
                    <option value={"16"}>16</option>
                    <option value={"32"}>32</option>
                    <option value={"64"}>64</option>
                    <option value={"128"}>128</option>
                    <option value={"256"}>256</option>
                    <option value={"512"}>512</option>
                </select>
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
                { type === "smartphones" ? <select onChange={(e) => setOs(e.target.value)}>
                    <option value={"Android"}>Android</option>
                    <option value={"iOS"}>iOS</option>
                </select> : <select onChange={(e) => setOs(e.target.value)}>
                    <option value={"Apple"}>Apple</option>
                    <option value={"Dell"}>Dell</option>
                    <option value={"Asus"}>Asus</option>
                    <option value={"HP"}>HP</option>
                    <option value={"Lenovo"}>Lenovo</option>
                    <option value={"Acer"}>Acer</option>
                    <option value={"Intel"}>Intel</option>
                </select>}
            </div>
            <button className={"filter-button"} onClick={() => {
                const request = { lowerPriceBond: lowerPriceBond,
                    upperPriceBond: upperPriceBond, brand: brand, memory: memory,
                    model: model, os: os }
                console.log(request)
                dispatch({type: "FILTER", payload: request})
            }}>Filter</button>
        </div>
    </div>)
}