import React from 'react';
import { Link } from "react-router-dom";
export default function Navbar(){
    function newmessage(){
        var name=document.getElementById('Name');
        var email=document.getElementById('Email');
        var phone=document.getElementById('mobile');
        var Password=document.getElementById('password');
        if(name.value==='' || email.value==='' || phone.value==='' || Password.value===''){
            alert("Fields can not be empty🙁");
        }
        else{
            setTimeout(() =>{
               name.value='';
               email.value='';
               phone.value='';
               Password='';
            },2000)
            alert("Welome to our community😎We will contact u soon");
        }
    }
    return(  
            <div className='navbutton'>
               <button className='navhome'><Link to="/">Home</Link></button>
               <button className='navlog' onClick={newmessage}><Link to="/login">Contact</Link></button>
            </div>
    )
}


















