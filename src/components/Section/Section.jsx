import React from 'react';


const Section = ({
        title,
        children
    }) => {
        return (
        <div> 
                <h2>{title}</h2>
                <div>
                        {children}
                </div>                 
        </div>   
    );
 };

export { Section };
