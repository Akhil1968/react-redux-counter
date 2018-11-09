import React, { Component } from 'react';

import CounterControl from '../components/CounterControl';
import CounterOutput from '../components/CounterOutput';
import {connect} from 'react-redux';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl 
                    label="Increment" 
                    clicked={this.props.onIncrementCounter} />
                <CounterControl 
                    label="Decrement" 
                    clicked={this.props.onDecrementCounter}  />
                <CounterControl 
                    label="+3" 
                    clicked={this.props.onAddCounter}  />
                <CounterControl 
                    label="-3" 
                    clicked={this.props.onSubtractCounter}  />
                
                
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'})
     }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);