import React from 'react';

function GroceryList ({groceryList, removeItem}) {
    return (
        <div>
            <ul>
                {groceryList.map( (item, index) => {
                    return (
                        <li key={`${index}${item}`} id={`${index}${item}`} onClick={removeItem}> {item} </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GroceryList;