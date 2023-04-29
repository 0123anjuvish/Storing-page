import { CiSettings, CiTimer } from "react-icons/ci";
import { RiCloudy2Fill, RiDeleteBin6Line } from "react-icons/ri";

import Header from './header';
import Main from './Pages/main';
import PrgBar from './Pages/progress';
import React from 'react';
import Sidebar from "./sideBar";
import { TfiFiles } from "react-icons/tfi";

const Home = () => {
  return (
    <>
<div>
    <div className="sidebar"><Sidebar/></div>
    <div className="=main"><Main/></div>
</div>
    </>
  );
}

export default Home;
