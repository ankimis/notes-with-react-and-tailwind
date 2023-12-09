 
import React, { Component } from "react"; 
import "./new.css"; 
import News from "./news.js";
import Spinner from './spinner.js'
import Nab from "./Nab.js";
import PropTypes from 'prop-types'

class panews extends Component {
    static defaultProps={
        country:'in',
        Size:5,
        catagory:'general'
      }
      static prosTypes={
        country:PropTypes.string,
        Size:PropTypes.number,
        catagory:PropTypes.string
      }
  constructor() {
    console.log("constructor");
    // Calling super class constructor
    super();
    // Binding event handler
    this.state = {
      articles_list: [],
      loading: true,
    };
    this.handleEvent = this.handleEvent();
  }
  async handleEvent() {
    console.log("this.propsa");
  setTimeout(await  fetch(
       `https://newsapi.org/v2/everything?q=tesla&from=2023-11-08&sortBy=publishedAt&apiKey=1a890b91de9548ca8eac7a96b918d030`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ articles_list: response.articles,loading: false });
        // response.articles.map((element) => {
        //   console.log(element);
        // });
      })
      .catch((err) => {
        console.log(err);
      }),5000
  )
  }
  render() {
    return (
      <>
           <Nab/> 
          {this.state.loading &&<Spinner />}
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
          </div>

        </>

    )
  }
}

export default panews;
