import React from "react";

class SidebarRestrictions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
      addElementFunction: props.addElementFunction,
    };
  }

  render() {
    return (
      <div>
        <h1>My Car is {this.props.expanded}</h1>
        <button onClick={super.test}></button>
      </div>
    );
  }
}

export default SidebarRestrictions;
