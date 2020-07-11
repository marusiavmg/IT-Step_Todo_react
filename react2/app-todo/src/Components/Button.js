import React from 'react'

function Button(props) {
    return(
        <button
            onClick={props.callBack}
            className={props.className}
         >
            {props.label}
        </button>
    )
}

export default Button;
