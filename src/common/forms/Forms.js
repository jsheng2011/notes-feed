import React, {Component} from 'react';
import {addNote, deleteNote, updateNoteById, deleteNoteById} from 'Service/noteService.js';
import ArticleForm from './ArticleForm';
import TranslationForm from './TranslationForm';
import TermForm from './TermForm';
import Button from 'Common/button/Button';
import ButtonGroup from 'Common/buttonGroup/ButtonGroup';
import Section from 'Common/section/Section';
import './Form.scss';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'term',
            newArticle: {}
        };

        this._renderFormByCategory = this._renderFormByCategory.bind(this);
        this._renderArticleForm = this._renderArticleForm.bind(this);
        this._renderVocabularyForm = this._renderVocabularyForm.bind(this);
        this._renderNoteForm = this._renderNoteForm.bind(this);
        this._renderIdeaForm = this._renderIdeaForm.bind(this);
        this._renderTodoForm = this._renderTodoForm.bind(this);
        this._getAllCurrentFormData = this._getAllCurrentFormData.bind(this);
        this._getDataToBeSent = this._getDataToBeSent.bind(this);
        this._onSaveData = this._onSaveData.bind(this);
    }
    _renderFormByCategory(category) {
        switch (category) {
            case 'article':
                return this._renderArticleForm();
            case 'vocabulary':
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
        const {category} = this.state;

        return (
            <div className="jsh-form">
                <Section spaceDown="l">
                    {/* TODO: make it a component like radio group, since it is radio logic */}
                    <ButtonGroup onChange={v => {
                        this.setState({
                            category: v
                        });
                    }}>
                        {/* TODO: can be more dynamic, a set of options only set one time, and use anywhere  */}
                        <Button info active={category === 'article'} name="article">Article</Button>
                        <Button info active={category === 'vocabulary'} name="vocabulary">Vocabulary</Button>
                        <Button info active={category === 'term'} name="term">Term</Button>
                        <Button info active={category === 'note'} name="note">Note</Button>
                        <Button info active={category === 'idea'} name="idea">Idea</Button>
                        <Button info active={category === 'todo'} name="todo">Todo</Button>
                    </ButtonGroup>
                </Section >
                <Section spaceDown="l">
                    { this._renderFormByCategory(this.state.category) }
                </Section>

                <Button primary onClick={this._onSaveData}>Save</Button>
                {/* <hr/>
                <p>TODO:to be deprecated</p> */}
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
