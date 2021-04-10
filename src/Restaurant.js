import React from "react";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      location: props.location,
      imageURL: props.imageURL,
      websiteURL: props.websiteURL,
      costLevel: props.costLevel,
      foodCategory: props.foodCategory,
    };
  }

  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

export default Restaurant;
