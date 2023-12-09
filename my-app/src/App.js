// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import "./components/new.css";
import PaNews from "./components/panews.js";
// import PropTypes from 'prop-types'
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<PaNews catagory="genral"/>} ></Route>
          {/* <Route path="/business" element={<PaNews catagory="business"/>}></Route>
          <Route path="/genral" element={<PaNews catagory="genral"/>}></Route>
          <Route path="/Sports" element={<PaNews catagory="Sports"/>}></Route>
          <Route path="/health" element={<PaNews catagory="health"/>}></Route>
          <Route path="/technology" element={<PaNews catagory="technology"/>}></Route>
          <Route path="/entertainment" element={<PaNews catagory="entertainment"/>}></Route> */}
        </Routes>
      </Router>
            
          {/* {this.state.loading &&<Spinner />}
          <div className="container">
            <h3 className="headeline"> Top Latest Headlines </h3>
            <div className="row justify-content-center ">
              {  this.state.articles_list.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <News
                      title={element.title}
                      handleEvent={this.handleEvent}
                      article={element.article}
                      image= {!element.urlToImage ? 'https://cdn.zeebiz.com/sites/default/files/2023/12/07/271743-untitled-design-85.png' : element.urlToImage}
                      description={element.description ? 'Berkshire Hathaway vice chairman was known for his straightforward advice to business leaders at a ‘Friday lunch club’':element.description}
                      imageid={element.url}
                      url={element.url}

                    />                  
                  </div>
                )
              })}
            </div>
          </div>
          <div className="container">
            <button type="button" class="btn btn-dark me-3 mt-3 mb-3">Privious</button>
            <button type="button" class="btn btn-dark me-3 mt-3 mb-3">Next</button>
          </div> */}

        </>

    )
  }
}

export default App;
