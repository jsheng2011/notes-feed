import React, {Component} from 'react';

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleContent: '',
            articleLink: '',
            articleMemo: '',
            articleTitle: ''
        };
    }
    render() {
        return (
            <div>
                <section>
                    <label htmlFor="articleContent">Article Acontent：</label>
                    <textarea id="articleContent" cols="40" rows="7" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            articleContent: value
                        }, () => {
                            this.props.getNewArticle({
                                articleContent: value,
                                articleLink: this.state.articleLink,
                                articleMemo: this.state.articleMemo,
                                articleTitle: this.state.articleTitle
                            });
                        });
                    }}/>
                </section>
                <section>
                    <label htmlFor="articleTitle">Article ATitle：</label>
                    <input id="articleTitle" type="text" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            articleTitle: value
                        }, () => {
                            this.props.getNewArticle({
                                articleTitle: value,
                                articleContent: this.state.articleContent,
                                articleLink: this.state.articleLink,
                                articleMemo: this.state.articleMemo,
                                articleMemo1: this.state.articleMemo1
                            });
                        });
                    }}/>
                </section>
                <section>
                    <label htmlFor="articleLink">Article Link:</label>
                    <input id="articleLink" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            articleLink: value
                        }, () => {
                            this.props.getNewArticle({
                                articleContent: this.state.articleContent,
                                articleLink: value,
                                articleMemo: this.state.articleMemo,
                                articleMemo1: this.state.articleMemo1,
                                articleTitle: this.state.articleTitle
                            });
                        });
                    }}/>
                </section>
                <section>
                    <label htmlFor="articleMemo">Memo:</label>
                    <textarea id="articleMemo" cols="40" rows="7" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            articleMemo: value
                        }, () => {
                            this.props.getNewArticle({
                                articleContent: this.state.articleContent,
                                articleLink: this.state.articleLink,
                                articleMemo1: this.state.articleMemo1,
                                articleTitle: this.state.articleTitle,
                                articleMemo: value
                            });
                        });
                    }}/>
                    <textarea id="articleMemo1" cols="40" rows="7" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            articleMemo1: value
                        }, () => {
                            this.props.getNewArticle({
                                articleContent: this.state.articleContent,
                                articleLink: this.state.articleLink,
                                articleMemo: this.state.articleMemo,
                                articleTitle: this.state.articleTitle,
                                articleMemo1: value
                            });
                        });
                    }}/>
                </section>
            </div>
        );
    }
}
