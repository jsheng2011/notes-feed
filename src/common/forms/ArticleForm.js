import React, {Component} from 'react';
import TextArea from 'Common/textarea/TextArea';
import Input from 'Common/input/Input';
import Label from 'Common/label/Label';
import Section from 'Common/section/Section';

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this._onTextChange = this._onTextChange.bind(this);
    }
    _onTextChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        }, () => {
            const {link, title, memo1, memo2, content} = this.state;

            const data = JSON.stringify({
                category: 'article',
                article: {
                    link,
                    read: true,
                    title,
                    memo: [
                        {
                            content: memo1,
                            createdTime: new Date().toISOString(),
                            modifiedTime: new Date().toISOString()
                        },
                        {
                            content: memo2,
                            createdTime: new Date().toISOString(),
                            modifiedTime: new Date().toISOString()
                        }
                    ],
                    article: {
                        content
                    }
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
                <Section spaceDown="m">
                    <Label spaceDown="s" block htmlFor="articleContent">Article Content</Label>
                    <TextArea fullwidth id="articleContent" name="content" onChange={this._onTextChange}></TextArea>
                </Section>
                <Section spaceDown="m">
                    <Label spaceDown="s" block htmlFor="articleTitle">Article Title</Label>
                    <Input fullwidth type="text" id="articleTitle" name="title" onChange={this._onTextChange}/>
                </Section>
                <Section spaceDown="m">
                    <Label spaceDown="s" block htmlFor="articleLink">Article Link</Label>
                    <Input fullwidth type="text" id="articleLink" name="link" onChange={this._onTextChange}/>
                </Section>
                <Section spaceDown="m">
                    <Label spaceDown="s" block htmlFor="articleMemo">Memo:</Label>
                    <TextArea spaceDown="s" fullwidth id="articleContent" name="memo1" onChange={this._onTextChange}/>
                    <TextArea fullwidth id="articleContent" name="memo2" onChange={this._onTextChange}/>
                </Section>
            </div>
        );
    }
}
