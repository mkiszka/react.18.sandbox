import React from 'react';
import _ from 'lodash';

export default function WordCount({ words }) {   
    console.log(words);
    const wordsStats = _.chain(words)
        .countBy()
        .map((value, key) => ({ wordName: key, count: value }))
        .orderBy(["count"], ['desc'])        
        .value();
    return <div className="WordCount-table">
        <div className='WordCount-row'><div>Słowo</div><div>Wystąpienia</div></div>
        {wordsStats.map((word, index) => {
            return <div key={index}  className='WordCount-row'>
                <div>{word.wordName}</div>
                <div>{word.count}</div>
            </div>
        })}
    </div>
}