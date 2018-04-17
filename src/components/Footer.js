import React, { Component } from 'react';

import Button from './Button';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const total = this.props.total;

        const DEFAULT_VALUE = [{
            id: 0,
            text: 'All'
        }, {
            id: 1,
            text: 'Active'
        }, {
            id: 2,
            text: 'Completed'
        }];

        const btnGroup = DEFAULT_VALUE.map((item) =>
            <Button
                key={item.id}
                active={this._active.apply(this, [item.id])}
                onClick={this.onClick.bind(this, item.id)}>{item.text}</Button>
        );

        return (
            <div className="m-list-footer">
                <span className="u-left-text">{total} items left</span>
                <div className="m-btn-wrapper">
                    {btnGroup}
                </div>
            </div>
        );
    }
    _active(id) {
        return id === this.props.filter;
    }
    onClick(id){
        this.props.selectFooterBtn(id);
    }
}

export default Footer;
