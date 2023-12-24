import React from 'react';

const FeedbackOptions = ({
    options,
    onLeaveFeedback
    }) => {
    return (
        <form>
            {options.map(option => (
                <button key={option} type="button" onClick ={onLeaveFeedback} name={option}>{option}</button>
            ))}
        </form>
    );
    };

export { FeedbackOptions };

