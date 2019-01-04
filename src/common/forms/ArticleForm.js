import React, {Component} from 'react';

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
                <section>
                    <label htmlFor="articleContent">Article Acontent：</label>
                    <textarea id="articleContent" name="content" cols="40" rows="7" onChange={this._onTextChange}/>
                </section>
                <section>
                    <label htmlFor="articleTitle">Article ATitle：</label>
                    <input id="articleTitle" name="title" type="text" onChange={this._onTextChange}/>
                </section>
                <section>
                    <label htmlFor="articleLink">Article Link:</label>
                    <input id="articleLink" name="link" onChange={this._onTextChange}/>
                </section>
                <section>
                    <label htmlFor="articleMemo">Memo:</label>
                    <textarea id="articleMemo" name="memo1" cols="40" rows="7" onChange={this._onTextChange}/>
                    <textarea id="articleMemo1" cols="memo2" rows="7" onChange={this._onTextChange}/>
                </section>
            </div>
        );
    }
}
