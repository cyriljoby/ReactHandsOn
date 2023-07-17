import Header from "./Headers";
import Navbar from "./Navbar";

import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return(
   <div>
        <Header/>
        <Navbar/>
        <Outlet/>
    </div>
  )
};

export default SharedLayout;
