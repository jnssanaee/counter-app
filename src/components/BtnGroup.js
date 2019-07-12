import React from 'react';

function BtnGroup({btnCLass, title, clickName, children}) {

    return (
        <button type="button" className={btnCLass} title={title} onClick={clickName}>{children}</button>
    )
}

export default BtnGroup
