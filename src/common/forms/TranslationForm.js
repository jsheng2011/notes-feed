import React, {Component} from 'react';
import {TRANSLATION_SERVER} from 'Const/noteServer.js';
import Input from 'Common/input/Input';
import Label from 'Common/label/Label';
import Button from 'Common/button/Button';
import Article from 'Common/article/Article';

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

    _handleTanslation() {
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
                <Label htmlFor="voc">Vocabulary</Label>
                <Input fullwidth id="voc" type="text" name="word" onChange={this._onChangeText} onKeyDown={e => {
                    if (e.keyCode == 13) {
                        this._handleTanslation();
                    }
                }}/>
                <Button inline onClick={this._handleTanslation}>Get translation</Button>
                <Article>{this.state.translation}</Article>
            </div>
        );
    }
}
