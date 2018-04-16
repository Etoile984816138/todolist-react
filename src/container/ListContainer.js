import React, { Component } from 'react';

import ItemContainer from './ItemContainer';
import Footer from '../components/Footer';

class ListContainer extends Component {
    constructor() {
        super();
        this.state = {
            filter: 0
        }
    }
    render() {
        const filterList = this.setFilter(this.state.filter, this.props.listItems);
        const listItems = filterList.map((item, index) =>
                <ItemContainer item={item} key={index} />
            );
        const total = this.props;
        return (
            <div className="m-list">
                {listItems}
                <Footer total={filterList.length}/>
            </div>
        );
    }
    setFilter(type, list) {
        switch (type) {
            case 0:
                return list;
            case 1:
                return list.filter(item => (!item.status))
            case 2:
                return list.filter(item => (!!item.status))
            default:
                return list;
        }
    }
}

export default ListContainer;
