import React, { Component } from 'react';

import Button from './Button';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const total = this.props.total;

        return (
            <div className="m-list-footer">
                <span className="u-left-text">{total} items left</span>
                <div className="m-btn-wrapper">
                    <Button>All</Button>
                    <Button>Active</Button>
                    <Button>Completed</Button>
                </div>
            </div>
        );
    }
}

export default Footer;
