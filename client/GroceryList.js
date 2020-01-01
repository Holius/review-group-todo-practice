import React from 'react';
import ReactDOM from 'react-dom';

function GroceryList ({groceryList}) {
    return (
        <div>
            <ul>
            {groceryList.map( (item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    )
}

export default GroceryList;