import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/listActions';

import Item from '../components/Item';

class ItemContainer extends Component {
    render() {
        const item = this.props.item;
        return <Item
            id={item.id}
            status={item.status}
            updateItem={() => this.updateItem(item.id, !item.status)}
            onDeleteItem={() => this.onDeleteItem(item.id)}
            onEditItem={(id, value) => this.onEditItem(id, value)}
        >{item.text}</Item>;
    }
    updateItem(id, status) {
        this.props.actions.updateItem(id, status);
    }
    onDeleteItem(id) {
        this.props.actions.deleteItem(id);
    }
    onEditItem(id, value) {
        this.props.actions.editItem(id, value);
    }
}

const mapStateToProps = (state) => ({
    ...state.list
});

export default connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(ItemContainer);
