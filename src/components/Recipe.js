import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    const { handleDetails } = this.props;

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div>
        
        </div>
      </div>
    )
  }
}
