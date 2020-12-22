import React from 'react'

const Radio = ({ name, label, ...rest }) => {
    return (
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name={name}
                id={name}
                {...rest}
                value={label} />
            <label className="form-check-label" htmlFor={name}>{label}</label>


        </div>
    );
}

export default Radio;