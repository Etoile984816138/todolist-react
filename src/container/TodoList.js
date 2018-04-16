import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../container/ListContainer';

import {values} from '../util/assist';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/listActions';

class TodoList extends Component {
    render() {
        const list = values(this.props.list);
        return (
            <div className="m-todolist">
                <Input onSubmit={(e) => this.onSubmit(e)} />
                <List listItems={list} />
            </div>
        );
    }
    onSubmit(value) {
        console.log(value);
    }
}

const mapStateToProps = (state) => ({
    ...state.list
});

export default connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(TodoList);
