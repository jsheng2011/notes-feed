import style from "./stylesheet/main.scss";
import React, { Component }from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        console.log('asdas');
    }
    render(){
        return <h1>App</h1>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
