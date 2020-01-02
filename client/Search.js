import React from 'react';

function Search ({onType, onSubmit, value, clearField}) {
    return (
        <div>
            <input
                value={value}
                onChange={onType}
                onClick={clearField}
            ></input>
            <button
                  onClick={onSubmit}
            >Submit</button>
        </div>
    )
}

export default Search;