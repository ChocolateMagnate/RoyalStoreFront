import "../styles/RegistrationForm.css"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";
import {login, tryLoginOnPageLoad} from "../actions/UserActions";
import useStartup from "../hooks/useStartup";

export default function LogInForm() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()

    useStartup(() => dispatch(tryLoginOnPageLoad()))

    return (
        <div className={"registration-form"}>
            <h1>Log in</h1>
            <input type="text" placeholder={"Login"} className={"enter-text"}
                   onChange={event => setEmail(event.target.value)}/>
            <input type="password" placeholder={"Password"} className={"enter-text"}
                   onChange={event => setPassword(event.target.value)}/>
            <input type={"checkbox"} className={"checkbox"}
                   onChange={(e) => setRememberMe(e.target.checked)}/>
            Remember me
            <input/>
            <input type={"checkbox"} className={"checkbox"}/> Log in as Admin
            <button className={"register-button"} onClick={async () => {
                const user = {
                    email: email,
                    password: password,
                    rememberMe: rememberMe
                }
                dispatch(await login(user))
                navigate("/")
            }}>Log In</button>
        </div>
    )
}