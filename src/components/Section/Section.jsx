import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions.jsx';
import { Statictics } from '../Statistics/Statistics.jsx';

const Section = ({
    onLeaveFeedback,
    options,
    good,
    neutral,
    bad,
    total,
    positivePercentage
    }) => {
    return (
        <div>
            <FeedbackOptions
                options= {options}
                onLeaveFeedback = {onLeaveFeedback}
            />
            <Statictics
                good={good}
                bad={bad}
                neutral = {neutral}
                total = {total}
                positivePercentage = {positivePercentage}
            />
        </div>          
    );
 };

export { Section };
