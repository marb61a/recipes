import React, { Component } from 'react';

import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe
    }
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
        
        </div>
      </div>
    );
  }
}
