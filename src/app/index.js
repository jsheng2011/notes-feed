import './stylesheet/app.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Tile from 'Common/tile';
import Forms from 'Common/forms/Forms';
import Button from 'Common/button/Button';
import ButtonGroup from 'Common/buttonGroup/ButtonGroup';
import {readAllNotes} from 'Service/noteService';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this._populateData = this._populateData.bind(this);
        this._getTodayNote = this._getTodayNote.bind(this);
        this._fiterOutTodaysNote = this._fiterOutTodaysNote.bind(this);
    }
    componentDidMount() {
        readAllNotes(data => {
            this.setState({
                data
            });
        });
    }
    _getTodayNote(data) {
        return data.filter(item => moment().isSame(moment(item.modifiedTime), 'd'));
    }
    _fiterOutTodaysNote() {
        this.setState({
            data: this._getTodayNote(this.state.data)
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
                    <ButtonGroup>
                        <Button primary>
                            <Link to="/" style={{color: 'white', 'text-decoration': 'none'}} >Home</Link>
                        </Button>
                        <Button primary>
                            <Link to="/feeds" style={{color: 'white', 'text-decoration': 'none'}}>Feeds</Link>
                        </Button>
                    </ButtonGroup>
                    <Route path="/feeds" component={() =>
                        <div>
                            {/* TODO: make it component */}
                            <div style={{border: '1px solid blue', margin: '30px'}}>
                                <Button inline onClick={this._fiterOutTodaysNote}>Get Today's Note</Button>
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
