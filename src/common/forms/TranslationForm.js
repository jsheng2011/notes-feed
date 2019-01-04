import React, {Component} from 'react';
import {TRANSLATION_SERVER} from 'Const/noteServer.js';

export default class TranslationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };

        this._onChangeText = this._onChangeText.bind(this);
        this._handleTanslation = this._handleTanslation.bind(this);
    }
    _onChangeText(e) {
        const value = e.target.value;
        this.setState({
            word: value
        });
    }

    _handleTanslation(e) {
        fetch(`${TRANSLATION_SERVER}/${this.state.word}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    translation: data.data.translations['0'].translatedText
                }, () => {
                    const {word, translation} = this.state;
                    const data = JSON.stringify({
                        category: 'vocabulary',
                        vocabulary: {
                            word,
                            translation,
                            direction: ['en', 'zh']
                        },
                        createdTime: new Date().toISOString(),
                        modifiedTime: new Date().toISOString()
                    });

                    this.props.getDataToBeSent(data);
                });
            });
    }
    render() {
        return (
            <div>
                <label htmlFor="voc">Vocabulary</label>
                <input id="voc" type="text" name="word" onChange={this._onChangeText} onKeyDown={e => {
                    if (e.keyCode == 13) {
                        this._handleTanslation();
                    }
                }}/>
                <button onClick={this._handleTanslation}>Get translation</button>
                <p>{this.state.translation}</p>
            </div>
        );
    }
}
