import React, { Component } from 'react';

class BtnGroup extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.props.increment} title="plus">
                    +
                </button>
                <button type="button" className="btn btn-danger" onClick={this.props.decrement} title="minus">
                    -
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.props.reset}>
                    reset
                </button>
            </div>
        )
    }
}

export default BtnGroup
