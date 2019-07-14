import React from 'react';

// const Hello=()=> <h1>Hello</h1>

const Hello = () => {
    return React.createElement('div', 
    {id:'one',class:'cone'}, 
    React.createElement('h1',{id:'hone'},'hello World'));

}

export default Hello;
