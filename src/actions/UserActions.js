import {tryAuthenticateUser, tryRegisterUser} from "./FetchActions";

function handleRegistrationErrors(responseStatus, dispatch) {
    let message
    switch (responseStatus) {
        case 302: //Found: user already exists
            message = "The email you prompted is already registered."
            break
        case 400: //Bad request: user cannot be registered with supplied data
            message = "The email you prompted is not valid and must always include the @ sign."
            break
        default:
            message = "Something went wrong. Please try again later."
    }
    dispatch({type: "REGISTRATION_FAILED", message: message})
}

const emailRegularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export function register(user, dispatch, navigate) {
    if (user.email === "" || user.password === "") {
        console.log("Email and password must be specified.")
        dispatch({type: "REGISTRATION_FAILED", message: "Email and password must be specified."})
        return
    }
    if (!String(user.email).toLowerCase().match(emailRegularExpression)) {
        dispatch({type: "REGISTRATION_FAILED",
            message: "The login field must be an email address, always include the @ sign and the domain."})
        return
    }

    let responseCode = 200
    tryRegisterUser(user)
        .then(data => {
            dispatch({type: "LOGIN_USER", payload: data})
            saveUser(data)
            setTimeout(() => {
                navigate("/")
            }, 3000)
        })
        .catch(error => {
            console.error("Server-side error occurred: " + error)
            console.log(error.status)
            handleRegistrationErrors(responseCode, dispatch)
        })
}

export function tryLoginOnPageLoad() {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) return {type: "LOGIN_USER", payload: user}
    else return { type: "IGNORE" }
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
}

export async function login(user) {
    const response = await tryAuthenticateUser(user)
    if (response != null) {
        saveUser(response)
        return {type: "LOGIN_USER", payload: response}
    } else return {type: "LOGIN_FAILED"}
}

export function logout() {
    localStorage.removeItem("user")
    return {type: "LOGOUT_USER"}
}