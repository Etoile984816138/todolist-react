import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <button className="u-btn">
                {this.props.children}
            </button>
        );
    }
}

export default Button;
