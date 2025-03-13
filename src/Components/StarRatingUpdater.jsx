import { FaStar } from "react-icons/fa"
import { useState } from "react";

export default function StarRating({noOfStars = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return <div className="flex">
        {
            [...Array(noOfStars)].map((_,index)=> {
                index +=1
                return <FaStar
                key={index}
                onClick={()=> handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave()}
                size={40}
                color={index <= (hover || rating) ? "#ffc107" : "#5A5A5A"}
                style={{ cursor: "pointer" }}
                />
            })
        }
    </div>
}