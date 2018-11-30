import React from 'react';

export default function ArticleView(props) {
    const {article, link, memo, createdTime, modifiedTime} = props.article,
        {content} = article;

    return (
        <div>
            <section><small>
                {content}
            </small></section>
            <section><small>
                <a href={link}>{link}</a>
            </small></section>
            <div><small>
                {
                    memo.map((memo, index) => {
                        const {content, modifiedTime, createdTime} = memo;

                        return (
                            <div key={index}>
                                <div>content: {content}</div>
                                <div>modifiedTime: {modifiedTime}</div>
                                <div>createdTime: {createdTime}</div>
                            </div>
                        );
                    })
                }
            </small></div>
            <section><small>
                {createdTime}
            </small></section>
            <section><small>
                {modifiedTime}
            </small></section>
        </div>
    );
}
