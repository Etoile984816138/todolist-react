import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    render() {

        return (
            <div className="m-input">
                <span 
                    className={this._dropClass.apply(this)} 
                    onClick={(e) => this._toggleClass(e)}
                ></span>
                <form onSubmit={(e) => this._onSubmit(e)}>
                    <input
                        type="text"
                        name="inputValue"
                        className="u-input"
                        value={this.state.value}
                        onChange={(e) => this._onChange(e)}
                        autoFocus
                        autoComplete="off"
                    />
                </form>
            </div>
        );
    }

    _onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({
            value:''
        });
    }

    _onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    _dropClass() {
        let selectClass = 'iconfont icon-drop';
        if (this.props.isAllSelect) {
            selectClass += ' select';
        } else {
            selectClass += ' unselect';
        }
        return selectClass;
    }
    _toggleClass() {
        this.props.onUpdateAll();
    }
}

export default Input;
