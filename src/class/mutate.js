const { Component } = require("react");

import React, { Component } from "react";

class App extends Component {

    state = {
        items: []
    };


    nextItemId = 0;

    makeItem() {


        return {
            id: this.nextItemId++,
            value: Math.random()
        };
    }




    addItemMutably = () => {
        this.state.items.push(this.makeItem());
        this.setState({ items: this.state.items });
    };

    render() {
        return (
            <div>

                <button onClick={this.addItemMutably}>Add item mutably (bad)</button>
                <ItemList items={this.state.items} />
            </div>
        );
    }
}