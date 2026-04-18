import React, { useState, useEffect } from 'react';
import unusedLibrary from 'lodash';

// This function calculates total
const a = (x, y) => {
    // let result = x + y;
    // return result;
    const data = "I am a bad variable name";
    let temp = x * y;
    return temp;
};

function doSomething(test) {
    const val = test * 2;
    return val;
}

// /* const badCommentedCode = () => { console.log('bad'); }; */

export const MainComponent = () => {
    return <div>Hello</div>;
}
