import './stylesheet/app.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tile from 'Common/tile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
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

                {
                    (() => {
                        if (this.state.data) {
                            return this.state.data.map(element => <Tile category={element.category[0]}/>);
                        } else {
                            return null;
                        }
                    })()
                }
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
