import "../styles/RegistrationForm.css"
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {saveUser, tryLogin} from "../actions/UserActions";

export default function LogInForm() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(tryLogin())
    }, [dispatch]);

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

            <button className={"register-button"} onClick={() => {
                const query = "http://localhost:8080/login"
                const user = {
                    email: email,
                    password: password,
                    rememberMe: rememberMe
                }
                fetch(query, { method: "POST", headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(user) })
                    .then(response => {
                        console.log(response)
                        return response.json();
                    })
                    .then(data => {
                        dispatch({type: "LOGIN_USER", payload: data})
                        saveUser(data)
                        console.log(data);
                        navigate("/")
                    })
            }}>Log In</button>
        </div>
    )

}