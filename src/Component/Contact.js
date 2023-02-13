import React from 'react';
import imph from "../images/phone.png";
import imem from "../images/email.png";
export default function Contact(props){
    return(
        <div className='contactname'>
                <img src={props.image} height={300} width={290} alt="" />
                <h1>{props.name}</h1>
            <div className='contactphone'>
                <img src={imph} height={20} width={20} alt="" />
                <p>{props.phone}</p>
            </div>
            <div className='contactphone'>
                <img src={imem} height={20} width={20} alt="" />
                <p>{props.email}</p>
            </div>
            <div className='catprice'>
                <h6>{props.price}</h6>
            </div> 
        </div>
    )
}











