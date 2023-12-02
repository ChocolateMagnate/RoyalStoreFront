import "../styles/RegistrationForm.css"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router";

export default function LogInForm() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

return (
        <div className={"registration-form"}>
            <h1>Log in</h1>
            <input type="text" placeholder={"Login"} className={"enter-text"} onChange={event => setEmail(event.target.value)}/>

            <input type="password" placeholder={"Password"} className={"enter-text"} onChange={event => setPassword(event.target.value)}/>
            <button className={"register-button"} onClick={() => {
                const query = "http://localhost:8080/login"
                const form = {
                    email: email,
                    password:password,
                    rememberMe: false
                }
                fetch(query, {method: "PUT", headers: {'Content-Type':'application/json'}, body: JSON.stringify(form)}).then(response => {
                    return response.json();

                })
                    .then(data => {
                    dispatch({type: "LOGIN_USER", payload: data})
                        console.log(data);
                    navigate("/")
                })
            }}>Log In</button>
        </div>
    )

}