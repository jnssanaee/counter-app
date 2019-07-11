import React from 'react';

function InputNum({ number, onChange }) {
    return (
        <input 
            type="text" 
            className="form-control" 
            value={ number } 
            onChange={ onChange } 
            placeholder="Enter number" 
        />
    )
}

export default InputNum