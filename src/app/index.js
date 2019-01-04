import './stylesheet/app.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Tile from 'Common/tile';
import Forms from 'Common/forms/Forms';
import {readAllNotes} from 'Service/noteService';

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
            console.log('data', data);
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
            <Router>
                <div>
                    <Route path="/feeds/" component={() =>
                        <div>
                            {/* TODO: make it component */}
                            <Link to="/">Home</Link>
                            <div style={{border: '1px solid blue', margin: '30px'}}>
                                {
                                    this._populateData()
                                }
                            </div>
                        </div>
                    }/>
                    <Route path="/" exact component={Forms}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
