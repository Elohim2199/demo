import React from 'react';

const person = (x) => {
    return (
        <div>
            <p>{x.name} Age: {x.age}</p>
            <p>{x.children}</p>
        </div>
    )
};
export default person;