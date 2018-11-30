import './stylesheet/main.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch('http://localhost:12138/notes')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data
                });
            });
    }
    render() {
        return (
            <div>
                <div></div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
