import React from 'react';
import ReactDom from 'react-dom';
import GroceryList from './GroceryList.js';
import Search from './Search.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: '',
            groceryList: ['Bawls']
        };
        this.onType = this.onType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearField = this.clearField.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onType (event) {
        this.setState({
            newItem: event.target.value
        })
    }

    clearField () {
        this.setState({
            newItem:'',
        })
    }

    removeItem (event) {

        console.log(event.target.id);
        
    }

    onSubmit () {
        if (this.state.newItem.length > 0) {
            this.setState({
                groceryList: [this.state.newItem, ...this.state.groceryList],
                newItem: '',
            })
        } else {
            this.setState({
                newItem: 'type characters',
            })
        }
    }

    render () {
        return (
            <div>
                <h1>Grocery List</h1>
                <Search
                    value={this.state.newItem}
                    onType={this.onType}
                    onSubmit={this.onSubmit}
                    clearField={this.clearField}
                    /> 
                <GroceryList 
                    groceryList={this.state.groceryList}
                    removeItem={this.removeItem}
                    />
            </div>
        )
    }
}

export default App;