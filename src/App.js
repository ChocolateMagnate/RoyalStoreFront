import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GuestPage from "./components/GuestPage";
import RegistrationForm from "./components/RegistrationForm";
import LogInForm from "./components/LogInForm";
import OrderedAlready from "./components/OrderedAlready";
import MyLiked from "./components/MyLiked";
import MyCart from "./components/MyCart";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Smartphones from "./components/Smartphones";
import Laptops from "./components/Laptops";



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
                    <Route path={"/smartphones"} element={<Smartphones/>}></Route>
                    <Route path={"/laptops"} element={<Laptops/>}></Route>
                  <Route path={"/dashboard"} element={<Dashboard/>}></Route>
                  <Route path={"/about"} element={<About/>}></Route>
              </Routes>
          </Router>


  )
}

export default App;
