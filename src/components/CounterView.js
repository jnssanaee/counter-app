import React, { Component } from 'react';

class CounterView extends Component {
    render() {
        const thisProps = this.props;
        return(
            <div className="count">{thisProps.data}</div>
        )
    }
}

export default CounterView