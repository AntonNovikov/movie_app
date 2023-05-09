/* eslint-disable react/prop-types */
// import React from "react";
import { useLocation } from "react-router-dom";

// class Detail extends React.Component{
//     componentDidMount(){
//         let state  = useLocation();
//         console.log(state)
//         // console.log(location.state)
//         // const {state} = location
//     }
//     render(){
//         return <span>dfd</span>
//     }
// }

function Detail() {
  let { state } = useLocation();
  console.log(state);
  if(state === undefined){
    return
  }
}

export default Detail;
