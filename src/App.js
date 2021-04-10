import "./App.css";
import SidebarRestrictions from "./SidebarRestrictions";
import Restaurant from "./Restaurant";
import Menu from "./Menu";
import Item from "./Item";
import React from "react";
import ReactDOM from "react-dom";
//Warning: render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.
class App extends React.Component {
  addElements = () => {
    /*while (document.getElementById("restaurantList").childNodes.length > 0) {
      document
        .getElementById("restaurantList")
        .removeChild(document.getElementById("restaurantList").childNodes[0]);
    }*/
    ReactDOM.unmountComponentAtNode(document.getElementById("restaurantList"));
    //
    var newRestaurant = new React.createElement(
      Restaurant,
      {
        Name: "Test",
        Location: "TEst",
        ImageURL: "1rn2iy.jpg",
        websiteURL: "Test",
        costLevel: 1,
        foodCategory: "Test",
      },
      null
    );
    //document.getElementById("restaurantList").appendChild(
    ReactDOM.render(newRestaurant, document.getElementById("restaurantList"));
    // ReactDOM.render(
    //   React.createElement(
    //     Restaurant,
    //     {
    //       Name: "Test",
    //       Location: "TEst",
    //       ImageURL: "1rn2iy.jpg",
    //       websiteURL: "Test",
    //       costLevel: 1,
    //       foodCategory: "Test",
    //     },
    //     null
    //   ),
    //   document.getElementById("restaurantList")
    // );
  };

  renderItems = () => {
    return (
      <Item
        name={"Royale with Cheese"}
        description={"Quarter pounder with cheese"}
        menuId={1}
        cost={2.99}
        calories={550}
      />
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <image src="">MenuMe</image>
        </header>

        <SidebarRestrictions
          expanded={"true"}
          addElementFunction={this.addElements}
        />

        <div id="restaurantList"></div>

        <Menu mealTime={"breakfast"} restaurant_id={1} />
      </div>
    );
  }
}

export default App;
