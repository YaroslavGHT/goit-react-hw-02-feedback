import React from 'react';


const Statistics = ({
  stat,
  total,
  positivePercentage
  }) => {
    return (
        <ul>
          <li>Good:<span>{stat.good}</span></li>
          <li>Neutral:<span>{stat.neutral}</span></li>
          <li>Bad:<span>{stat.bad}</span></li>
          <li>Total:<span>{total}</span></li>
          <li>Positive feedback:<span>{positivePercentage}%</span></li>
        </ul>
    );
    };

export { Statistics };
