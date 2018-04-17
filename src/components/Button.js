import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <button 
                className={this._btnClass.apply(this)}
                onClick={this.onClick.bind(this)}>
                {this.props.children}
            </button>
        );
    }
    _btnClass(){
        return this.props.active ? 'u-btn active' : 'u-btn';
    }
    onClick(){
        this.props.onClick();
    }
}

export default Button;
