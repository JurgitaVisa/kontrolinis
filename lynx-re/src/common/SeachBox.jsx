import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className="form-control my-3"
            placeholder="Ieškoti pagal vardą..."
            value={value}
            onChange={onChange}
        />
    );
}

export default SearchBox;
