import React from 'react';


const Statictics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
    }) => {
    return (
        <div>
          <h2>Statistics</h2>
          {total >0 ?
            <ul>
                <li>Good:<span>{good}</span></li>
                <li>Neutral:<span>{neutral}</span></li>
                <li>Bad:<span>{bad}</span></li>
                <li>Total:<span>{total}</span></li>
                <li>Positive feedback:<span>{positivePercentage}%</span></li>
              </ul>
          : <p>There is no feedback</p>
          }
        </div>
    );
    };

export { Statictics };
