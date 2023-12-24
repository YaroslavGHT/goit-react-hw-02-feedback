import React from 'react';


const FeedbackOptions = ({
    options,
    onLeaveFeedback
    }) => {
    console.log(options)
    const optionKeys = Object.keys(options);
    return (
        <form>
            {optionKeys.map(option => (
                <button key={option} type="button" onClick ={onLeaveFeedback} name={option}>{option}</button>
            ))}
        </form>
    );
    };

export { FeedbackOptions };


            // {options.map(option => (
            //     <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            //         {option}
            //     </button>
            // ))}