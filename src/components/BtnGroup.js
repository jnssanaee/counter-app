import React from 'react';

function BtnGroup(props) {
    return (
        <div>
            <button 
                type="button"
                className="btn btn-primary"
                onClick={props.increment}
                title="plus"
            >
                +
            </button>
            <button 
                type="button" 
                className="btn btn-danger" 
                onClick={props.decrement} 
                title="minus"
            >
                -
            </button>
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={props.reset}
            >
                reset
            </button>
        </div>
    )
}

export default BtnGroup
