import React, {Component} from 'react';
import startCase from 'lodash/startCase';
import ArticleForm from './ArticleForm';
import NOTE_SERVER from 'Const/noteServer';

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'article',
            newArticle: {}
        };

        this._renderArticleForm = this._renderArticleForm.bind(this);
        this._renderVocabularyForm = this._renderVocabularyForm.bind(this);
        this._renderNoteForm = this._renderNoteForm.bind(this);
        this._renderIdeaForm = this._renderIdeaForm.bind(this);
        this._renderTodoForm = this._renderTodoForm.bind(this);

        this._getNewArticle = this._getNewArticle.bind(this);
    }

    _renderArticleForm() {
        return <ArticleForm getNewArticle={this._getNewArticle}/>;
    }

    _renderVocabularyForm() {
        return 'this is _renderVocabularyForm';
    }

    _renderNoteForm() {
        return 'this is _renderNoteForm';
    }

    _renderIdeaForm() {
        return 'this is _renderIdeaForm';
    }

    _renderTodoForm() {
        return 'this is _renderTodoForm';
    }

    _getNewArticle(v) {
        this.setState({
            newArticle: v
        });
    }

    render() {
        console.log(this.state.newArticle);

        return (
            <div>
                <section>
                    <label htmlFor="catrgory">Catrgory: </label>
                    <input type="text" id="catrgory" placeholder="type category" value={this.state.category} onChange={v => {
                        this.setState({
                            category: v.target.value
                        });
                    }}/>
                </section>
                <section>
                    {
                        (() => {
                            switch (this.state.category) {
                                case 'article':
                                    return this._renderArticleForm();
                                case 'vocabulary':
                                    return this._renderVocabularyForm();
                                case 'note':
                                    return this._renderNoteForm();
                                case 'idea':
                                    return this._renderIdeaForm();
                                case 'todo':
                                    return this._renderTodoForm();

                                default:
                                    break;
                            }
                        })()
                    }
                </section>
                <section>
                    <button onClick={() => {
                        const category = this.state.category,
                            {articleContent, acticleLink, acticleMemo} = category;

                        // Return xhr;

                        // Fetch(new Request('http://localhost:12138/notes', {
                        //     Method: 'POST',

                        //     // Mode: 'cors', // No cors needed for ibm github pages. DON'T ASK WHY!,
                        //     Header: myHeaders,
                        //     Body: JSON.stringify({
                        //         Category: 'article',
                        //         Article: {
                        //             Link: 'http://www.baidu.com',
                        //             Read: true,
                        //             Memo: [
                        //                 {
                        //                     Content: acticleMemo,
                        //                     CreatedTime: Date.now().toString()
                        //                 }
                        //             ],
                        //             Article: {
                        //                 Content: 'aaaaa',
                        //                 CreatedTime: Date.now().toString()
                        //             }
                        //         }
                        //     })
                        // }));

                        // fetch('http://localhost:12138/notes', {
                        //     Method: 'POST',
                        //     Headers: {
                        //         Accept: 'application/json',
                        //         'Content-Type': 'application/json',

                        //         Mode: 'cors'
                        //     },
                        //     Body: JSON.stringify({
                        //         Category: 'article',
                        //         Article: {
                        //             Link: 'http://www.baidu.com',
                        //             Read: true,
                        //             Memo: [
                        //                 {
                        //                     Content: acticleMemo,
                        //                     CreatedTime: Date.now().toString()
                        //                 }
                        //             ],
                        //             Article: {
                        //                 Content: 'aaaaa',
                        //                 CreatedTime: Date.now().toString()
                        //             }
                        //         }

                        //     })
                        // })
                        // .then(response => {
                        //     Console.log({response});

                        //     Return response.json();
                        // })
                        // .then(data => {
                        //     Console.log('data', data);
                        // })
                        // .catch(e => {
                        //     Console.log(e);
                        // });
                    }}>Save</button>
                </section>
            </div>
        );
    }
}
