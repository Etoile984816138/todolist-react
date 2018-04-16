import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/listActions';

import Item from '../components/Item';

class ItemContainer extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    render() {
        const item = this.props.item;
        return <Item
            id={item.id}
            status={item.status}
            updateItem={this.updateItem.bind(this)}
        >{item.text}</Item>;
    }
    updateItem(id, status){
        this.props.actions.updateItem(id, !status);
    }
}

const mapStateToProps = (state) => ({
    ...state.list
});

export default connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(ItemContainer);
