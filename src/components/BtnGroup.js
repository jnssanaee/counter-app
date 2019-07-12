import React from 'react';

function BtnGroup({increment, decrement, reset}) {
    const btnArr = [
        { txt: '+', class: 'btn btn-primary', onclick: increment, title: 'plus' },
        { txt: '-', class: 'btn btn-danger', onclick: decrement, title: 'minus' },
        { txt: 'reset', class: 'btn btn-outline-secondary', onclick: reset },
    ]

    return (
        <div>
            {btnArr.map((e, index) => {
                return <button type="button" key={index} className={e.class} onClick={e.onclick} title={e.title}>{e.txt}</button>
            })}
        </div>
    )
}

export default BtnGroup
