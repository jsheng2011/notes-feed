import './stylesheet/app.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Tile from 'Common/tile';
import Dialog from 'Common/dialog';
import {readAllNotes} from '../service/noteService';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this._populateData = this._populateData.bind(this);
    }
    componentDidMount() {
        readAllNotes(data => {
            this.setState({
                data
            });
        });
    }
    _populateData() {
        if (this.state.data) {
            return this.state.data.map((element, index) => <Tile {...element} key={index}/>);
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>

                {
                    this._populateData()
                }

                <hr/>
                <Dialog/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
