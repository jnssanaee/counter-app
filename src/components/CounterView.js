import React, { Component } from 'react';

class CounterView extends Component {
    render() {
        return(
            <div className="count">{this.props.data}</div>
        )
    }
}

export default CounterView