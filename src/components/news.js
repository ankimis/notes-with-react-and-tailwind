import React, { Component } from "react";
import './new.css';

export default class news extends Component {

  render() {
   let   {article,description,image,imageid}= this.props;

    return (
      <div className="container">
        <h3 className="my-4 text-center">
        </h3>
        <div className="card" style={{ width: "18rem",height:"20rem"}}>
          <img
          src={image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{article}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={`/news/${imageid}`} className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
    )
  }
}
