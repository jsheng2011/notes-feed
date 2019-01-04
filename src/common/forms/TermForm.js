import React, {Component} from 'react';
import Label from 'Common/label/Label';

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this._onChangText = this._onChangText.bind(this);
    }
    _onChangText(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        }, () => {
            const data = JSON.stringify({
                category: 'term',
                term: {
                    term: this.state.term,
                    source: this.state.source,
                    link: this.state.link,
                    explanation: this.state.explanation

                    // TODO: bullet point
                },
                createdTime: new Date().toISOString(),
                modifiedTime: new Date().toISOString()
            });
            this.props.getDataToBeSent(data);
        });
    }
    render() {
        return (
            <div>
                <Label htmlFor="jsh-term">Term</Label>
                <input type="text" name="term" id="jsh-term" onChange={this._onChangText}/>

                <Label htmlFor="jsh-term__explanation">Explanation</Label>
                <input type="text" name="explanation" id="jsh-term__explanation" onChange={this._onChangText}/>

                <Label htmlFor="jsh-term__source">Source</Label>
                <input type="text" name="source" id="jsh-term__source" onChange={this._onChangText}/>

                <Label htmlFor="jsh-term__link">Link</Label>
                <input type="text" name="link" id="jsh-term__link" onChange={this._onChangText}/>

                {/* TODO: bullet point */}
            </div>
        );
    }
}
