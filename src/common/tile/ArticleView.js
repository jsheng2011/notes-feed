import React from 'react';

export default function ArticleView(props) {
    console.log('props.article', props.article);

    // console.log('props.article', props.article);
    const {article, link, memo, createdTime, modifiedTime} = props.article;
    let content;

    if (article) {
        content = article.content;
    }

    return (
        <div>
            <section><small>
                content: {content}
            </small></section>
            <section><small>
                link<a href={link}>{link}</a>
            </small></section>
            <div><small>
                {
                    memo.map((memo, index) => {
                        if (!memo) {
                            return;
                        }
                        const {content, modifiedTime, createdTime} = memo;

                        return (
                            <div key={index}>
                                <div>memo.content: {content}</div>
                                <div>memo.modifiedTime: {modifiedTime}</div>
                                <div>memo.createdTime: {createdTime}</div>
                            </div>
                        );
                    })
                }
            </small></div>
            <section><small>
                createdTime: {props.createdTime}
            </small></section>
            <section><small>
                modifiedTime: {props.modifiedTime}
            </small></section>
        </div>
    );
}
