import React from 'react';

function BtnGroup({increment, decrement, reset}) {
    const btnJson = [
        { txt: '+', class: 'btn-primary', onclick: 'increment', title: 'plus' },
        { txt: '-', class: 'btn-danger', onclick: 'decrement', title: 'minus' },
        { txt: 'reset', class: 'btn-outline-secondary', onclick: 'reset', title: '' },
    ]
    const btnList = btnJson.map((element, index) => {
        (<button className="btn" key={index}></button>)
    })

    return (
        <div>
            {btnList}
            {/* <button 
                type="button"
                className="btn btn-primary"
                onClick={increment}
                title="plus"
            >
                +
            </button>
            <button 
                type="button" 
                className="btn btn-danger" 
                onClick={decrement} 
                title="minus"
            >
                -
            </button>
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={reset}
            >
                reset
            </button> */}
        </div>
    )
}

export default BtnGroup
