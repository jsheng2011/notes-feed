import React, {Component} from 'react';

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
            sourceValue: value
        });
    }

    _handleTanslation(e) {
        fetch(`https://translation.googleapis.com/language/translate/v2?q=${this.state.sourceValue}&target=zh&format=text&source=en&key={key}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log('data.data.translations[\'0\'].translatedText', data.data.translations['0'].translatedText);
                this.setState({
                    data: data.data.translations['0'].translatedText
                });
            });
    }
    render() {
        return (
            <div>
                <label htmlFor="voc">Vocabulary</label>
                <input id="voc" type="text" onChange={this._onChangeText} onKeyDown={e => {
                    if (e.keyCode == 13) {
                        this._handleTanslation();
                    }
                }}/>
                <button onClick={this._handleTanslation}>Get translation</button>
                <p>{this.state.data}</p>
            </div>
        );
    }
}
