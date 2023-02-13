import React, { useState } from 'react';
const Sidebar=(props)=>{                                                                                                                                                                                                                                                                
   const[note,setnote]=useState({
     title:"",
     content:"",
   });

   const InputEvent=(event) =>{   //here on the place of event we can take any name
    //const value=event.target.value;  *here how can we know when the user is writing something by this method we know that.
    //const name=event.target.name;

    const {name,value}=event.target;     //object destructuring of above one
    setnote((prevData) =>{         //here setnote have property i.e prevData or oldData which can access
        //previous data present in note or usestate.
        return{
           ...prevData,
           [name]:value,
        };
    });
   };

   const addEvent=()=>{
      props.passNote(note);
      setnote({
        title:"",
        content:"",
      });
   };

    return(
      <>
        <div className='sidebar'>
             <h1 className='drama'>Notes</h1>
                <div className='secondpart'></div>
                  <input type="text" 
                    value={note.title}
                    name='title' 
                    onChange={InputEvent}
                    className='text' 
                    placeholder='Title' 
                    autoComplete='off' 
                  />
                  <textarea  name='content'  onChange={InputEvent} value={note.content} className='title'>
                  </textarea>
                  <button className='plus' onClick={addEvent}>+</button>
        </div>
      </>
    )
}
export default Sidebar;