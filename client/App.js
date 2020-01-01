import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from "./GroceryList.js";
import Search from "./Search.js";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groceryItem: '',
            groceryList: ['apple', 'milk', 'cookies']
        }
        this.onType = this.onType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onType (event) {
        //console.log(event.target.value);
        this.setState({
            groceryItem: event.target.value,
        })
    }

    onSubmit() {
        this.setState({
            groceryList: [this.state.groceryItem, ...this.state.groceryList],
            groceryItem: '',
        })
    }

    render (props) {
        return (
          <div>
            <h1> My Grocery List </h1>
                <Search onType={this.onType} onSubmit={this.onSubmit} text={this.state.groceryItem}/>
                <GroceryList groceryList={this.state.groceryList} /> 
          </div> 
            
        )
    }

}

export default App;