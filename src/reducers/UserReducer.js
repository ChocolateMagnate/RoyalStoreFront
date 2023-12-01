const initialUser = {
    id: "",
    username: "",
    email: "",
    token: "",
    serverResponseMessage: "",
}

export default function UserReducer(state = initialUser, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {...action.payload, serverResponseMessage: "You are successfully logged in!"}
        case "REGISTRATION_FAILED":
            return {...state, serverResponseMessage: action.message}
        case "LOGOUT_USER":
            return initialUser
        default:
            return state;
    }
}