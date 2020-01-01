import React from 'react';
import ReactDOM from 'react-dom';

function Search (props) {
    return (
    <div>
        <input 
            value={props.text}
            onChange={props.onType}>
        </input>
        <button
            onClick={props.onSubmit}>
                Submit
        </button>
    </div>
    )
}

export default Search;