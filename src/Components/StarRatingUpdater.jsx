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

    return <div className="flex gap-2 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-slate-50 shadow-sm">
        {
            [...Array(noOfStars)].map((_,index)=> {
                index +=1
                return <FaStar
                key={index}
                onClick={()=> handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave()}
                size={40}
                className={`transition-colors duration-200 ${
                    index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                } hover:scale-110 cursor-pointer`}
                />
            })
        }
    </div>
}