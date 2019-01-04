import React from 'react';

// import Quote from 'Common/quote/index';
import Label from 'Common/label/Label';
import Article from 'Common/article/Article';

// import ReadMore from 'Common/readmore/ReadMore';

export default function ArticleView(props) {
    const {term} = props;

    return (
        <div>
            <Label block>{term.term}</Label>
            {/* <Label block>{term.source}</Label> */}
            {/* <Label block>{term.link}</Label> */}
            <Article block>{term.explanation}</Article>
        </div>
    );
}
