import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';

class TodoList extends Component {
    render() {
        return (
            <div className="m-todolist">
                <Input onSubmit={(e) => this.onSubmit(e)} />
                <List/>
            </div>
        );
    }
    onSubmit(value) {
        console.log(value);
    }
}

export default TodoList;
