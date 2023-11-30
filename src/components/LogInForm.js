import "./RegistrationForm.css"

export default function LogInForm() {
return (
        <div className={"registration-form"}>
            <h1>Log in</h1>
            <input type="text" placeholder={"Login"} className={"enter-text"}/>

            <input type="text" placeholder={"Password"} className={"enter-text"}/>
            <button className={"register-button"}>Log In</button>
        </div>
    )

}