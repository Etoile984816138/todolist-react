import React, { Component } from 'react';

class Item extends Component {
    constructor() {
        super();
        this.state = {
            moveIn: false,
            isInput: false
        }
    }
    render() {
        const ItemText = <div className="m-list-item"
            onMouseOver={(e) => this._onMouseEnterItem(e)}
            onMouseOut={(e) => this._onMouseLeaveItem(e)}>
            <span
                className={this._toggleItemStyle.apply(this)}
                onClick={(e) => this._onToggleItem()}
            ></span>
            <span
                className={this._itemTextStyle.apply(this)}
                onDoubleClick={(e) => this._onDoubleClickItem(e)}
            >{this.props.children}</span>
            <span
                className={this._itemDeleteStyle.apply(this)}
                onClick={(e) => this._onDeleteItem(e)}></span>
        </div>;

        const ItemInput = <form onSubmit={(e) => this._onCompleteItem(e)}>
            <input
                type="text"
                className="u-item-input"
                onBlur={(e) => this._onBlurItemInput(e)}
                autoFocus />
        </form>;

        const listItem = this.state.isInput ? ItemInput : ItemText;
        return (<div>{listItem}</div>);
    }

    _toggleItemStyle() {
        let selectClass = 'iconfont icon-item';
        if (this.props.status) {
            selectClass += ' icon-select';
        } else {
            selectClass += ' icon-unselect';
        }
        return selectClass;
    }

    _onToggleItem() {
        const { id, status } = this.props;
        this.props.updateItem(id, status);
    }

    _itemTextStyle() {
        let className = 'u-item-text';
        if (this.props.status) {
            className += ' u-completed';
        }
        return className;
    }

    _itemDeleteStyle() {
        let className = 'iconfont icon-delete';
        return this.state.moveIn ? className : `${className} z-hide`;
    }

    _onMouseEnterItem() {
        this.setState({
            moveIn: true
        });
    }

    _onMouseLeaveItem() {
        this.setState({
            moveIn: false
        });
    }

    _onDoubleClickItem() {
        this.setState({
            isInput: true
        })
    }

    _onBlurItemInput() {
        this.setState({
            isInput: false
        })
    }

    _onCompleteItem(e) {
        e.preventDefault();
        this._onBlurItemInput();
    }

    _onDeleteItem(e) {
        console.log('delete');
    }
}

export default Item;
