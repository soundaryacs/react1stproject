import React, { useState } from 'react';

export default function ShowHide() {
    const [flag, toggleFlag] = useState(true);
    // const toggle = function () {
    //     toggleFlag(!flag)
    // }
    return (
        <div>
            {flag ? <div>This is SHOW/HIDE text</div> : null}
            {/* <button onClick={toggle}>
                {flag ? 'HIDE' : 'SHOW'}
            </button> */}
            <button onClick={()=>toggleFlag(!flag)}>
                {flag ? 'HIDE' : 'SHOW'}
            </button>
        </div>
    )
}
