import React from 'react';
import Navbar from '../Component/Navbar';
import open from '../images/openeye.jfif';
import close from '../images/closeye.jfif';
export default function Login(){
    return(
        <>
                <div className='colorform'>
                   <form action="" method="post" className='formdata'>
                    <h1 className='logi'>Contact</h1>
                       <div className='firstname'>
                           <label htmlFor='name'>Name:-</label>
                           <input type="text" name="Name" id="Name" />
                       </div>
        
                       <div className='firstlogi'>
                           <label htmlFor='email'>E-mail:-</label>
                           <input type="text" name="Email" id="Email" />
                       </div>
        
                       <div className='moblogi'>
                        <label htmlFor='mobile'>Mobile No.:-</label>
                        <input type="text" name="mobile" id="mobile" />
                       </div>
        
                       <div className='secondlogi'>
                        <label htmlFor='password'>Password:-</label>
                        <input type="password" name="password" id="password" />
                       </div>
                       <span></span>
                       <div className='contact'>
                       <Navbar />
                       </div>
                  </form>
                </div>
            </>
    )
} 