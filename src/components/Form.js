import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: ''
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addMovie(this.state.movie);
    this.setState({
      movie: ""
    });
  };
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="movie">Movie :</label>
        <input
          type="text"
          name="movie"
          id="movie"
          value={this.state.movie}
          onChange={this.handleChange}
        />
        <button>Chercher</button>
      </form>
    );
  }
}

export default Form;
