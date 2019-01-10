import React, { Component } from 'react';

import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe,
      url: ``
    };
  };

  async componentDidMount() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe: jsonData.recipe
      });
    } catch(error) {
      console.log(error);
    }
  };

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    const { handleIndex } = this.props;

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <button>
              back to recipe list
            </button>
          </div>
        </div>
      </div>
    );
  }
}
