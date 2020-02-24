import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";

const API_BASE_URL = "http://www.omdbapi.com";
const apiKey = "e34bab5d";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  addMovie = movie => {
    this.setState({
      movie: movie
    });
    this.getMovie()

  };
  // getCard = () => {
  //   const url = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`
  //   console.log(url);
  //   axios.get(url)
  //   .then((res) => {
  //     this.setState({
  //       // console.log(res)df
  //     })
  //   }).catch((err) => {
      
  //   });
  // }
  getMovie = async () => {
    console.log(this.state.movie);
    console.log(this.state.movie);
    console.log(this.state.movie);
    
    const url = await axios.get(`${API_BASE_URL}/?apikey=${apiKey}&t=${this.state.movie}`);
    
    console.log(this.state.movie);

    console.log(url)
    this.setState({
      data: {
        year: url.data.Year,
        director: url.data.Director,
        title: url.data.Title,
        id: url.data.imdbI,
        image: url.data.Poster
      }
    });
  }
  

  // async componentDidUpdate() {
  //   const url = await axios.get(
  //     `${API_BASE_URL}/?apikey=${apiKey}&t=${this.state.movie}`
  //   );
  //   console.log(url);
    
  //   this.setState({
  //     data: {
  //       year: url.data.Year,
  //       director: url.data.Director,
  //       title: url.data.Title,
  //       id: url.data.imdbID
  //     }
  //   });
  // }
  
  
  render() {
    const renderMovie = () => {
      if(this.state.data != null){
        return (
          <div>
              {/* <p>hello</p> */}
            <p>{this.state.data.title}</p>
            <p>{this.state.data.year}</p>
            <p>{this.state.data.director}</p>
            <img src={this.state.data.image} alt=""/>
          </div>
        );

      }
    };

    return (
      <div>
        <h1>Search movie</h1>
        <Form addMovie={this.addMovie} />
        {renderMovie()}
      </div>
    );
  }
}

export default App;
