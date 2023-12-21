import React from 'react';


const FeedbackOptions = ({
    options = {},
    onLeaveFeedback = {}
    }) => {
    return (
        <form>
            <button type="button" onClick={onLeaveFeedback} name='good'>Good</button>
            <button type="button" onClick={onLeaveFeedback} name='neutral'>Neutral</button>
            <button type="button" onClick={onLeaveFeedback} name='bad'>Bad</button>
        </form>
    );
    };

export { FeedbackOptions };
