import React from 'react';

function CounterView(props) {
    return (
        <div 
            className="count">
            { props.data }
        </div>
    )
}

export default CounterView