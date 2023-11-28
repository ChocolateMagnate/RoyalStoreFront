import InsertNewProduct from "./components/InsertNewProduct";
import BoxOfProduct from "./components/BoxOfProduct";
import Rendering from "./components/Rendering";
import './App.css'
import TopNavigationBar from "./components/TopNavigationBar";
import LeftNavBar from "./components/LeftNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GuestPage from "./components/GuestPage";
import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
          <Router>
              <Routes>
                    <Route path={"/" } element={<GuestPage/>}></Route>
                    <Route path={"/registration"} element={<RegistrationForm/>}></Route>
              </Routes>
          </Router>


  )
}

export default App;
