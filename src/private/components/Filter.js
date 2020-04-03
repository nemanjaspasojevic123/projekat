import React from 'react'

export const Filter = ({handleInput}) => {
    return (
        <input className="input-filter" type="text" placeholder="Search..." onChange={(e) => handleInput(e)} />
    )
}