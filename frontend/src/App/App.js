import {Typography} from "@mui/material";
import Login from "../pages/Login";
import RegisterForm from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import ProductManage from "../pages/Product";
import CartManage from "../pages/Cart";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
      <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/register' element={<RegisterForm/>}/>
              {/*<Route path='/dashboard' element={<DashboardHome/>}/>
              <Route path='product' element={<ProductManage/>} />*/}
      </Routes>
      <Routes>
          <Route exact path='/dashboard/*' element={<Dashboard/>}/>
      </Routes>
      </>
  );
}

export default App;
