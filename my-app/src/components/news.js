import React from "react";
import './new.css';

const news=(props)=>{

 
   let   {article,description,image,url}= props;

    return (
    <>
        <h3 className="my-4 text-center">
        </h3>
        <div className="card" >
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
            <a href={`${url}`} className="btn btn-dark btnheight">
              View
            </a>
          </div>
        </div>
      </>
    )
  
}
export default news;
