import React from "react";
import { useLocation } from "react-router-dom";


function About(props){
  const location = useLocation()
  console.log(location.state);
  return (<div>Cyg</div>)
}


export default About;
