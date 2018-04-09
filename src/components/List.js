import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';

class List extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="m-list">
                <Item>123</Item>
                <Item>345</Item>
                <div className="m-list-footer">
                    <span className="u-left-text">2 items left</span>
                    <div className="m-btn-wrapper">
                        <Button>All</Button>
                        <Button>Active</Button>
                        <Button>Completed</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
