//Using Local storage:-
/*
localStorage.getItem("key")
localStorage.setItem("key",value)
Note:-Value must be a string ,so if u have a more compex like an array or object to save ,u'will need to use:-
JSON.stringify(value)
*JSON.parse(stringifiedValue)   //When we used to pull out of local storage then we use this

So, everytime the notes array changes the state u should save the array of notes to local storage once again i put here 
that by which we can stringify to turn the array into string in order to save in it local storage

When the app first loads, initialize the notes state with the notes saved in localstorage. u will nedd to use json.parse()
to turn the stringify array                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
*/

import React from 'react';
function Note({title,content}){
    return(
        <>
           <div className='note'>
              <h3>{title}</h3>
              <br/>
              <p>{content}</p>
              <button className='btn'>&</button>
           </div>
        </>
    );
};
export default Note;














