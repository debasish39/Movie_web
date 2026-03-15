"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating(){

  const [rating,setRating] = useState(0)
  const [hover,setHover] = useState(null)

  return(

    <div className="flex mt-2">

      {[1,2,3,4,5].map((star)=>{

        return(

          <FaStar
            key={star}
            size={20}
            className="cursor-pointer"
            color={(hover || rating) >= star ? "gold" : "gray"}
            onClick={()=>setRating(star)}
            onMouseEnter={()=>setHover(star)}
            onMouseLeave={()=>setHover(null)}
          />

        )

      })}

    </div>

  )

}