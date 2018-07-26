import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Handler extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };

        // Binding _increment and _decrement functions
        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    }

    _increment() {
        let count = this.state.count;
        count++;
        this.setState({ count: count });
    }

    _decrement() {
        let count = this.state.count;
        if(count > 0){
            count--;
            this.setState({ count: count });
        }
    }

    render() {
        return (
            <div className="container">
               <p>{ this.state.count }</p>
               <button onClick={this._increment}>+</button>
               <button onClick={this._decrement}>-</button>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Handler></Handler>, document.getElementById('root'));
}