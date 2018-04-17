import React, { Component } from 'react';

import ItemContainer from './ItemContainer';
import Footer from '../components/Footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/listActions';

class ListContainer extends Component {
    render() {
        const allList = this.props.listItems;
        const filterList = this.setFilter(this.props.filter, allList);
        const listItems = filterList.map((item, index) =>
                <ItemContainer item={item} key={index} />
            );
        const total = this.setFilter(1, allList).length;

        const footer = allList.length > 0 ? <Footer
            total={total}
            filter={this.props.filter}
            selectFooterBtn={this.selectFooterBtn.bind(this)} />:'';

        return (
            <div className="m-list">
                {listItems}
                {footer}
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
    selectFooterBtn(filter){
        this.props.actions.selectFooterBtn(filter);
    }
}

const mapStateToProps = (state) => ({
    ...state.list
});

export default connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(ListContainer);