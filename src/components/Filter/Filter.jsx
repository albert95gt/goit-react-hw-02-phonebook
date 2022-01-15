import React from 'react'

const Filter = ({onChange}) => {
    return (
        <>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text"
                name='filter'
                onChange={onChange} />
        </>
    )
}

export default Filter;