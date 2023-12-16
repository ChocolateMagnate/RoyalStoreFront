const initial = {
    isSearching: false,
    text: "",
    parameters: null
}

export default function GoodsReducer(state = initial, action) {
    switch (action.type) {
        case "SEARCH":
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}