import "./App.css";
import SidebarRestrictions from "./SidebarRestrictions";
import Restaurant from "./Restaurant";
import Menu from "./Menu";
import React from "react";

class App extends React.Component {
  addElements = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>MenuMe</p>
        </header>

        <SidebarRestrictions
          expanded={"true"}
          addElementFunction={this.addElements}
        />
        <Restaurant
          name={"McDonalds"}
          location={"2140 K Street Lincoln, NE 68510"}
          imageURL={"www.fakemcdonaldsimage.com"}
          websiteURL={"www.mcdonalds.com"}
          costLevel={"low"}
          foodCategory={"American"}
        />
        <Menu mealTime={"breakfast"} restaurant_id={1} />
      </div>
    );
  }
}

export default App;
