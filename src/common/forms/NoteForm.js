import React, {Component} from 'react';
import Label from 'Common/label/Label';

// import Input from 'Common/input/Input';
// import TextArea from 'Common/textarea/TextArea';
import {convertMarkdown} from 'Service/noteService.js';
import Button from 'Common/button/Button';
import RichTextEditor from 'Common/richTextEditor/RichTextEditor';
import {PREVIEW_SERVER} from 'Const/noteServer.js';

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onChangText = this._onChangText.bind(this);
    }
    _onChangText(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <Label spaceDown="s" block htmlFor="jsh-term" >Note:</Label>
                <div style={{
                    display: 'flex'
                }}>
                    <RichTextEditor onShiftEnter={() => {
                        const data = JSON.stringify({
                            markdowm: this.state.note
                        });
                        convertMarkdown(data, PREVIEW_SERVER, data => {
                            this.setState({
                                html: JSON.parse(data).html
                            }, () => {
                                const data = JSON.stringify({
                                    category: 'note',
                                    note: {

                                        // source:
                                        note: {

                                            // author
                                            content: this.state.html
                                        }
                                    },
                                    createdTime: new Date().toISOString(),
                                    modifiedTime: new Date().toISOString()
                                });
                                this.props.getDataToBeSent(data);
                            });
                        });
                    }}style={{width: '50%'}} name="note" onChange={this._onChangText}></RichTextEditor>
                    <div className="markdown-body" style={{width: '50%'}} dangerouslySetInnerHTML={{__html: this.state.html}}/>
                </div>

                <Button inline onClick={() => {
                    const data = JSON.stringify({
                        markdowm: this.state.note
                    });
                    convertMarkdown(data, PREVIEW_SERVER, data => {
                        console.log('getting data', JSON.parse(data));
                        console.log('getting data', JSON.parse(data).html);
                        this.setState({
                            html: JSON.parse(data).html
                        });
                    });
                }}>Preview</Button>

                {/* <Input spaceDown="s" fullwidth type="text" name="term" id="jsh-term" onChange={this._onChangText}/>

                <Label spaceDown="s" block htmlFor="jsh-term__explanation">Explanation</Label>
                <Input spaceDown="s" fullwidth type="text" name="explanation" id="jsh-term__explanation" onChange={this._onChangText}/>

                <Label spaceDown="s" block htmlFor="jsh-term__source">Source</Label>
                <Input spaceDown="s" fullwidth type="text" name="source" id="jsh-term__source" onChange={this._onChangText}/>

                <Label spaceDown="s" block htmlFor="jsh-term__link">Link</Label>
                <Input spaceDown="s" fullwidth type="text" name="link" id="jsh-term__link" onChange={this._onChangText}/> */}
                {/* TODO: bullet point */}
            </div>
        );
    }
}
