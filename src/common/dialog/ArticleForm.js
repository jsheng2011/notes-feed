import React, {Component} from 'react';

export default class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleContent: '',
            acticleLink: '',
            acticleMemo: ''
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
                                acticleLink: this.state.acticleLink,
                                acticleMemo: this.state.acticleMemo
                            });
                        });
                    }}/>
                </section>
                <section>
                    <label htmlFor="acticleLink">Article Link:</label>
                    <input id="acticleLink" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            acticleLink: value
                        }, () => {
                            this.props.getNewArticle({
                                articleContent: this.state.articleContent,
                                acticleLink: value,
                                acticleMemo: this.state.acticleMemo
                            });
                        });
                    }}/>
                </section>
                <section>
                    <label htmlFor="acticleMemo">Memo:</label>
                    <textarea id="acticleMemo" cols="40" rows="7" onChange={e => {
                        const value = e.target.value;

                        this.setState({
                            acticleMemo: value
                        }, () => {
                            this.props.getNewArticle({
                                articleContent: this.state.articleContent,
                                acticleLink: this.state.acticleLink,
                                acticleMemo: value
                            });
                        });
                    }}/>
                </section>
            </div>
        );
    }
}
