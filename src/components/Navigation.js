import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Главная страница</Link>
      {/* <Link to="/about">О проектре</Link> */}
      <Link to={{
        pathname:"/about",
        state:{
            fromLocation:true,
        }
      }}>О проектре</Link>
      {/* <a href="/about">О проектре</a> */}
    </div>
  );
}

export default Navigation;
