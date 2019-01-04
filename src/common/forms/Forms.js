import React, {Component} from 'react';
import {addNote, deleteNote, updateNoteById, deleteNoteById} from 'Service/noteService.js';
import ArticleForm from './ArticleForm';
import TranslationForm from './TranslationForm';
import TermForm from './TermForm';
import Button from 'Common/button/Button';

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'article',
            newArticle: {}
        };

        this._renderFormByCategory = this._renderFormByCategory.bind(this);
        this._renderArticleForm = this._renderArticleForm.bind(this);
        this._renderVocabularyForm = this._renderVocabularyForm.bind(this);
        this._renderNoteForm = this._renderNoteForm.bind(this);
        this._renderIdeaForm = this._renderIdeaForm.bind(this);
        this._renderTodoForm = this._renderTodoForm.bind(this);
        this._getNewArticle = this._getNewArticle.bind(this);
        this._getAllCurrentFormData = this._getAllCurrentFormData.bind(this);
        this._getDataToBeSent = this._getDataToBeSent.bind(this);
        this._onSaveData = this._onSaveData.bind(this);
    }
    _renderFormByCategory(category) {
        switch (category) {
            case 'article':
                return this._renderArticleForm();
            case 'voc':
                return this._renderVocabularyForm();
            case 'term':
                return this._renderTermForm();
            case 'note':
                return this._renderNoteForm();
            case 'idea':
                return this._renderIdeaForm();
            case 'todo':
                return this._renderTodoForm();

            default:
                break;
        }
    }
    _renderArticleForm() {
        return <ArticleForm getDataToBeSent={this._getDataToBeSent}/>;
    }

    _renderVocabularyForm() {
        return <TranslationForm getDataToBeSent={this._getDataToBeSent}/>;
    }

    _renderTermForm() {
        return <TermForm getDataToBeSent={this._getDataToBeSent}/>;
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

    _getDataToBeSent(data) {
        console.log('_getDataToBeSent', data);
        this.setState({
            dataToBeSent: data
        });
    }

    // TODO: to be deprecated, use `_getDataToBeSent` instead
    _getNewArticle(v) {
        console.info('vvvv', v);
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
    _onSaveData() {
        addNote(this.state.dataToBeSent);
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
                    { this._renderFormByCategory(this.state.category) }
                </section>

                <Button primary onClick={this._onSaveData}>Save</Button>
                <hr/>
                <p>TODO:to be deprecated</p>
                {/* <section>
                    <button onClick={this._onSaveArticle}>Save</button>
                </section> */}
                {/* <button onClick={() => {
                    deleteNote();
                }}>
                    Delete All
                </button>

                <button onClick={() => {
                    const {category, articleContent, articleLink, articleTitle, articleMemo, articleMemo1} = this._getAllCurrentFormData();
                    const data = JSON.stringify({
                        category,
                        article: {
                            link: articleLink,
                            read: true,
                            title: articleTitle,
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

                    updateNoteById('5c2bcf609767071dcf31d672', data);
                }}>
                    update
                </button>

                <button onClick={() => {
                    deleteNoteById('5c2bcf609767071dcf31d672');
                }}>
                    Delete
                </button> */}
            </div>
        );
    }
}
