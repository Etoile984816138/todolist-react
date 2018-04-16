import React, { Component } from 'react';

import Item from './Item';
import Footer from './Footer';

class List extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const listItems = this.props.listItems.map((item) =>
            <Item key={item.id} status={item.status}>{item.text}</Item>
        );
        return (
            <div className="m-list">
                {listItems}
                <Footer/>
            </div>
        );
    }
}

export default List;
