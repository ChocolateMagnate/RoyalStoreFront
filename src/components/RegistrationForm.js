import "./RegistrationForm.css"

export default function RegistrationForm() {
return (
        <div className={"registration-form"}>
            <h1>Registration Form</h1>
            <input type="text" placeholder={"Login"} className={"enter-text"}/>
            <input type="text" placeholder={"Password"} className={"enter-text"}/>
            <input type={"checkbox"} className={"remember-me"}/>
            <button className={"register-button"}>Register</button>

        </div>
    )

}