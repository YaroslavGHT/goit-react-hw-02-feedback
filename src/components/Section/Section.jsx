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
        <>
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackOptions
                    options= {options}
                    onLeaveFeedback = {onLeaveFeedback}
                />
            </div>
            <div>
                <h2>Statistics</h2>
                {total >0 ? <Statictics
                        good={good}
                        bad={bad}
                        neutral = {neutral}
                        total = {total}
                        positivePercentage = {positivePercentage}
                    />    
                : <p>There is no feedback</p>
                }
            </div>
        </>  
    );
 };

export { Section };
