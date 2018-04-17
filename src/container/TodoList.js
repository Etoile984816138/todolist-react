import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../container/ListContainer';

import { values, randomString } from '../util/assist';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/listActions';

class TodoList extends Component {
    constructor(){
        super();
        this.state ={
            isAllSelect:false
        }
    }
    render() {
        const list = values(this.props.list);
        const isAllSelect = this.props.isAllSelect;
        
        return (
            <div className="m-todolist">
                <Input 
                    onSubmit={(e) => this.onSubmit(e)}
                    onUpdateAll={() => this.onUpdateAll()}
                    isAllSelect={isAllSelect} />
                <List listItems={list} />
            </div>
        );
    }
    onSubmit(value) {
        this.props.actions.addItem({
            id: randomString(),
            text: value,
            status: false
        });
    }
    onUpdateAll(){
        const status = this.props.isAllSelect;
        this.props.actions.updateAll(!status);
    }
}

const mapStateToProps = (state) => ({
    ...state.list
});

export default connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(TodoList);
