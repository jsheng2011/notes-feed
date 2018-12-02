import './stylesheet/app.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tile from 'Common/tile';
import Dialog from 'Common/dialog';
import NOTE_SERVER from 'Const/noteServer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        fetch(NOTE_SERVER)
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
                            return this.state.data.map((element, index) => <Tile {...element} key={index}/>);
                        } else {
                            return null;
                        }
                    })()
                }
                <hr/>
                <br/>
                <br/>
                <br/>
                <Dialog/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
