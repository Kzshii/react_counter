import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.incrementCounter = this.updateCounter.bind(this, 1);
        this.decrementCounter = this.updateCounter.bind(this, -2);
    }
    
    updateCounter(count) {
        this.setState({count: this.state.count + count});
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
            </div>
        );
    }    
}
export default Counter;