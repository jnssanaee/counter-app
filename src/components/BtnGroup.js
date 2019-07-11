import React, { Component } from 'react';

class BtnGroup extends Component {

    render() {
        const thisProps = this.props;
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={thisProps.increment} title="plus">
                    +
                </button>
                <button type="button" className="btn btn-danger" onClick={thisProps.decrement} title="minus">
                    -
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={thisProps.reset}>
                    reset
                </button>
            </div>
        )
    }
}

export default BtnGroup
