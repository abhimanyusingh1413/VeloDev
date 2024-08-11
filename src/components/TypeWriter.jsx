import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

function App(){
    const {text}=useTypewriter({
        word: ['Devloper','designer'],
        loop: {},
    })
    return(
        <h1 style={{margin:'50px'}}>
            I m a
            <span style={{fontWeight: 'bold', color: 'green'}} >
            {text}
            </span>
        </h1>
    );
}

export default App;