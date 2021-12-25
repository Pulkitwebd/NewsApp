import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="General" pageSize={5} country="in" categories="General" />}></Route>
            <Route exact path="/about" element={<News key="Home" pageSize={5} country="in" categories="Home" />}></Route>
            <Route exact path="/Business" element={<News key="Business" pageSize={5} country="in" categories="Business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment"  pageSize={5} country="in" categories="entertainment" />}></Route>
            <Route exact path="/Health" element={<News key="Health" pageSize={5} country="in" categories="Health" />}></Route>
            <Route exact path="/Science" element={<News key="Science" pageSize={5} country="in" categories="Science" />}></Route>
            <Route exact path="/Sports" element={<News key="Sports" pageSize={5} country="in" categories="Sports" />}> </Route>
            <Route exact path="/Technology" element={<News key="Technology" pageSize={5} country="in" categories="Technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;
