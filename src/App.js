import InsertNewProduct from "./components/InsertNewProduct";
import BoxOfProduct from "./components/BoxOfProduct";
import Rendering from "./components/Rendering";
import './App.css'
import TopNavigationBar from "./components/TopNavigationBar";
import LeftNavBar from "./components/LeftNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GuestPage from "./components/GuestPage";
import RegistrationForm from "./components/RegistrationForm";
import LogInForm from "./components/LogInForm";
import OrderedAlready from "./components/OrderedAlready";
import MyLiked from "./components/MyLiked";
import MyCart from "./components/MyCart";
import Catalog from "./components/Catalog";


function App() {
  return (
          <Router>
              <Routes>
                    <Route path={"/" } element={<GuestPage/>}></Route>
                    <Route path={"/registration"} element={<RegistrationForm/>}></Route>
                    <Route path={"/logIn"} element={<LogInForm/>}></Route>
                    <Route path={"/orderedAlready"} element={<OrderedAlready/>}></Route>
                    <Route path={"/myLiked"} element={<MyLiked/>}></Route>
                    <Route path={"/myCart"} element={<MyCart/>}></Route>
              </Routes>
          </Router>


  )
}

export default App;
