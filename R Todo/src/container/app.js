import React, { Component } from 'react';
import { connect } from 'react-redux'
import addAction from '../actions/addAction'
import { bindActionCreators } from 'redux'
class Todo extends Component {
    actionFire(e){
        e.preventDefault()
        const input = this.refs.input
        console.log(input.value)
        this.props.action(input.value)
        input.value = ''
        console.log(this.props.list,"List of map list")
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.actionFire.bind(this)}>
                    <input type="text" ref="input" />
                    <button type="submit">Add Name</button>
                </form>   
                {
                        this.props.list.map((item,i) => (
                            <li key={i}>
                                {item.text}
                            </li>
                        ))
                    }             
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ action: addAction }, dispatch)
}
function mapStateToProps(state) {
    return {
        list: state.users
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);