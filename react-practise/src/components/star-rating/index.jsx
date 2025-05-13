import {FaStar} from 'react-icons/fa';
import React, { useState } from 'react';
export default function StarRating({noOfStars=5}){
    const [rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
    function handleClick(getCurrentIndex)
    {
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex)
    {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave()
    {
        setHover(rating);
    }
    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                index+=1
                return <FaStar key={index} 
                color={hover >= index || rating >= index ? "gold" : "lightgray"}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40} />
            })
        }
    </div>
}