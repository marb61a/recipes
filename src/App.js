import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { recipes } from "./tempList";
class App extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  state = {
    recipes: recipes,
    base_url: "",
    url: "",
    pageIndex: 1,
    details_id: 35382,
    search: "",
    query: "&q="
  };

  async getRecipes() {
    try {
      console.log(this.state.url);
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = () => {
    switch(this.state.pageIndex) {
      default:
      case 1 :
        return (
          <RecipeList 
            handleDetails={this.handleDetails}
            recipes={this.state.recipes}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            search={this.state.search}
          />
        )
      case 0 :
    }
  }

  render() {
    return <React.Fragment>{this.displayPage()}</React.Fragment>;
  }
}

export default App;
