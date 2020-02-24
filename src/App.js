import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";
import FormList from "./components/FormList";

const API_BASE_URL = "http://www.omdbapi.com";
const apiKey = "e34bab5d";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  addMovie = async movie => {
    try {
      const url = await axios.get(
        `${API_BASE_URL}/?apikey=${apiKey}&t=${movie}`
      );
      this.setState({
        movie: movie,
        data: {
          year: url.data.Year,
          director: url.data.Director,
          title: url.data.Title,
          id: url.data.imdbI,
          image: url.data.Poster
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderMovie = () => {
    if (this.state.data) {
      return (
        <FormList
          year={this.state.data.year}
          director={this.state.data.director}
          title={this.state.data.title}
          image={this.state.data.image}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Search a movie</h1>
        <Form addMovie={this.addMovie} />
        {this.renderMovie()}
      </div>
    );
  }
}

export default App;
