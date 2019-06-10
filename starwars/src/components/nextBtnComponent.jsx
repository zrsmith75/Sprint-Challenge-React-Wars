import React, { Component } from "react";

class NextBtnComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsNext: []
    };
  }

  componentDidMount() {
    this.getNext("https://swapi.co/api/people/");
  }

  getNext = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsNext: data.next });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <a href="`${this.state.starwarsNext}`">
        <button className="next-link">NEXT</button>
      </a>
    );
  }
}

export default NextBtnComponent;
