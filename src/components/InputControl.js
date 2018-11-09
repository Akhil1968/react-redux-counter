import React, {Component} from 'react';
import {connect} from 'react-redux';

class InputControl extends Component{
    state = {
        incrValue: '',
        decrValue: '' 
    }

    incrChangeHandler = (event) => {
        this.setState(  { incrValue: parseInt(event.target.value) } );
    }

    decrChangeHandler = (event) => {
        this.setState(  { decrValue: parseInt(event.target.value) } );
    }

    render(){
        return (
            <div style={styles.containerStyle}>
            <div style={styles.textStyle}>This is a custom Input Control  </div>
                <input 
                    style={styles.inputStyle}
                    type="number" 
                    placeholder="Increment By"
                    value={this.state.incrValue} 
                    onChange={this.incrChangeHandler}   />
                <button onClick={() => this.props.dispatch({type: 'INCVAL', value: this.state.incrValue})}>Increment</button>
                <input 
                    style={styles.inputStyle}
                    type="number" 
                    placeholder="Decrement By" 
                    value={this.state.decrValue} 
                    onChange={this.decrChangeHandler}  />
                <button onClick={() => this.props.dispatch({type: 'DECVAL', value: this.state.decrValue})}>Decrement</button>
                <div style={styles.textStyle}>Counter Value: {this.props.ctr}  </div>                  
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const styles = {
    containerStyle: {
        width: 400,
        height: 180,
        backgroundColor: '#e8e8e8',
        borderType: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
   inputStyle: {
        flex: 1,
        marginLeft: 50,
        marginRight: 15
    },
    textStyle: {
        flex: 1,
        marginLeft: 50,
        marginRight: 15,
        color: 'blue'
    }
}
export default connect(mapStateToProps)(InputControl);
