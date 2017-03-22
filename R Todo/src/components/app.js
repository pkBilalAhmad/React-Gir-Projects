import React, { Component } from 'react';
import Todo from '../container/app'
// import Todos from '../container/todos'
class App extends Component {
    render() {
        return (
            <div>
                Hello from Component App                
                <Todo/>
                
            </div>
        );
    }
}

export default App