import React, {Component} from 'react';
import {addNote, deleteNote, updateNoteById} from 'Service/noteService.js';
import ArticleForm from './ArticleForm';

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
        this._getAllCurrentFormData = this._getAllCurrentFormData.bind(this);
        this._onSaveArticle = this._onSaveArticle.bind(this);
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

    _getAllCurrentFormData() {
        return {
            category: this.state.category,
            ...this.state.newArticle
        };
    }

    _onSaveArticle() {
        const {category, articleContent, articleLink, articleMemo, articleMemo1} = this._getAllCurrentFormData();
        const data = JSON.stringify({
            category,
            article: {
                link: articleLink,
                read: true,
                memo: [
                    {
                        content: articleMemo,
                        createdTime: new Date().toISOString(),
                        modifiedTime: new Date().toISOString()
                    },
                    {
                        content: articleMemo1,
                        createdTime: new Date().toISOString(),
                        modifiedTime: new Date().toISOString()
                    }
                ],
                article: {
                    content: articleContent
                }
            },
            createdTime: new Date().toISOString(),
            modifiedTime: new Date().toISOString()
        });

        addNote(data);
    }

    render() {
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
                    <button onClick={this._onSaveArticle}>Save</button>
                </section>
                <button onClick={() => {
                    deleteNote();
                }}>
                    Delete All
                </button>

                <button onClick={() => {
                    const {category, articleContent, articleLink, articleMemo, articleMemo1} = this._getAllCurrentFormData();
                    const data = JSON.stringify({
                        category,
                        article: {
                            link: articleLink,
                            read: true,
                            memo: [
                                {
                                    content: articleMemo,
                                    createdTime: new Date().toISOString(),
                                    modifiedTime: new Date().toISOString()
                                },
                                {
                                    content: articleMemo1,
                                    createdTime: new Date().toISOString(),
                                    modifiedTime: new Date().toISOString()
                                }
                            ],
                            article: {
                                content: articleContent
                            }
                        },
                        createdTime: new Date().toISOString(),
                        modifiedTime: new Date().toISOString()
                    });

                    updateNoteById('5c2bc731426c6a1bfbf07570', data);
                }}>
                    update
                </button>
            </div>
        );
    }
}
