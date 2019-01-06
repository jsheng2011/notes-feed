import React from 'react';
import Quote from 'Common/quote/Quote';
import Label from 'Common/label/Label';
import Article from 'Common/article/Article';
import ReadMore from 'Common/readmore/ReadMore';

export default function ArticleView(props) {
    console.log('props.article', props.article);

    console.log('props.article', props.article);
    const {article, link, memo, title

        // createdTime,
        // modifiedTime
    } = props.article;

    let content;

    if (article) {
        content = article.content;
    }

    return (
        <div>
            <h4>{title}</h4>
            <Label>Article</Label>
            <ReadMore>
                <Article>{content}</Article>
            </ReadMore>
            <Label>Quotes</Label>
            {
                memo.map((memo, index) => {
                    if (!memo) {
                        return;
                    }
                    const {
                        content

                        // modifiedTime,
                        // createdTime
                    } = memo;

                    return (
                        <Quote cite={link} key={index}>
                            {content}
                        </Quote>
                    );
                })
            }
        </div>
    );
}
