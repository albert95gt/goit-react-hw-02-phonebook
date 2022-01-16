import React from 'react'
import PropTypes from 'prop-types';


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
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;