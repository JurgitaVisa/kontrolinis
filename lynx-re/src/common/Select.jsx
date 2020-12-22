import React from 'react';

const Select = ({ name, label, error, options, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="form-control" >
                <option value=""></option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Select;

