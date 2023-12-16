import {combineReducers} from "redux";
import userReducer from "./UserReducer"
import GoodsReducer from "./GoodsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    goods: GoodsReducer
})

export default rootReducer