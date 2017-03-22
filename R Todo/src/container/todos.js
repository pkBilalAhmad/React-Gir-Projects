import React, { Component } from 'react';
import { connect } from 'react-redux'
class Todos extends Component {
    render() {
        return (
            <div>
                <ul>
                    {/*{
                        this.props.users.map((item,i) => (
                            <li key={i}>
                                {item.text}
                            </li>
                        ))
                    }*/}
                    
                    {
                        console.log(this.props.users)
                    }
                </ul>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        users: state.users
    }
})(Todos);