// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Nab from './components/Nab.js';
import News from './components/news.js';
class App extends Component {
  constructor(props) {
    console.log('constructor');
    // Calling super class constructor
    super(props);
    // Binding event handler
    this.state={
      articles_list :[],
      loading:false
    }
    this.handleEvent = this.handleEvent();
  }
  handleEvent() {
    console.log('this.props');
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-11-07&sortBy=publishedAt&apiKey=1a890b91de9548ca8eac7a96b918d030", {
              method: "GET",
            })
              .then((response) => response.json())
              .then((response) => {
                // console.log(response.articles);
                // this.state=response;
                this.setState({articles_list: response.articles});
                // response.articles.map((element)=>{
                //   console.log(element);
                //  })


              })
              .catch((err) => {
                console.log(err);
              });  }
   render(){
  return (
    <>
      <Nab />
      <div className='row'>
          {this.state.articles_list.map((element)=>{
           return <div className='col-md-4' key={element.url}>
                    <News title={element.title} handleEvent={this.handleEvent}  article={element.article}
                    image={element.urlToImage} description={element.description} imageid={element.url}/>;
                </div>
          })}
      </div>
    </>

  );
   }
}

export default App;
