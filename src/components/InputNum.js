import React from 'react';

function InputNum(props) {
    return (
        <input 
            type="text" 
            className="form-control" 
            value={ props.data } 
            onChange={ props.onChange } 
            placeholder="Enter number" 
        />
    )
}

export default InputNum