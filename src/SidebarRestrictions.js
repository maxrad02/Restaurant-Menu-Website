import React from 'react';

class SidebarRestrictions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
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

export default SidebarRestrictions;