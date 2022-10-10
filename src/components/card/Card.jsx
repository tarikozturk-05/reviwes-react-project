import React from 'react'
import Button from '../button/Button';
import cartStyle from './card.module.css'

import { FaChevronLeft ,
  FaChevronRight

} from 'react-icons/fa';

const Card = ({data}) => {
    // console.log(data)
    // const {image,id,name,job,text}=data
   
  return (
    <div>
         {data.map((item)=>{
            const {name,id,text,image,job}=item;
           return(
            <div className={cartStyle.container} key={id}> 
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p>{text}</p>
            <span><FaChevronLeft /> <FaChevronRight /></span>
            <Button/>
            </div>
           
           )
         

         })}
     
        

    </div>
  )
}

export default Card