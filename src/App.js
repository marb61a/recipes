import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { recipes } from "./tempList";
class App extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  state = {
    recipes: recipes
  }

  async getRecipes() {
    try {

    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = () => {

  }

  render() {
    return <React.Fragment>{this.displayPage()}</React.Fragment>;
  }
}

export default App;
