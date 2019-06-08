import React, { Component } from "react";
import NextBtnComponent from "./components/nextBtnComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      loading: false
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    this.setState({
      loading: true
    });
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        this.setState({
          loading: false
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {!this.state.loading ? (
          this.state.starwarsChars.map(char => (
            <div className="display">
              <ul>
                <li id="char-name">{`${char.name}`}</li>
                <li>{`Height: ${char.height}cm Weight: ${char.mass}kg`}</li>
                <li>{`Birth Year: ${char.birth_year}`}</li>
              </ul>
            </div>
          ))
        ) : (
          <div className="loading">
            <p>... Loading!</p>
          </div>
        )}
        <NextBtnComponent />
      </div>
    );
  }
}

export default App;
