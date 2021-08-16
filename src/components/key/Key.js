import React from 'react'
import "./Key.css";

export const Key = ({highlight, children, onPress}) => {
    return (
        <div className={"key " + highlight} onClick={onPress}>
            {children}
        </div>
    )
}

export default Key;