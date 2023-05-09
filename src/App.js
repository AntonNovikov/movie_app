import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
// import Contacts from "./routes/Contacts";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* <Route path="/" exact={true} element={Home} /> */}
        <Route path="/" exact={true} element={<Home />} />
        {/* <Route path="/" exact={true} component={Home} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/movie-details" element={<Detail />} />
        {/* <Route path="/movie-details" component={Detail} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contacts" component={Contacts} /> */}
      </Routes>
    </Router>
  );
}

export default App;
