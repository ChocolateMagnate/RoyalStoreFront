import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../actions/UserActions";
import "../App.css"
import {useNavigate} from "react-router";

export default function RegistrationForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const serverResponseMessage = useSelector(state => state.user.serverResponseMessage)
    const [message, setMessage] = useState(serverResponseMessage)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        setMessage(serverResponseMessage)
    }, [serverResponseMessage])

    return (<div className={"registration-form"}>
        <h1>Registration Form</h1>
        <input type="text" placeholder={"Login"} className={"enter-text"} onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" placeholder={"Password"} className={"enter-text"} onChange={(e) => {setPassword(e.target.value)}}/>
        <div className={"row"}>
            <input type={"checkbox"} onChange={(e) => {
                setRememberMe(e.target.checked)
            }}/>
            <label>Remember me</label>
        </div>
        <div className={"row"}>
            <input type={"checkbox"} onChange={(e) => {
                setIsAdmin(e.target.checked)
            }}/>
            <label>Register as admin</label>
        </div>
        <button onClick={() => {
            register(email, password, rememberMe, isAdmin, dispatch, navigate)}
        }>Register</button>
        {message && <p>{message}</p>}
    </div>)
}