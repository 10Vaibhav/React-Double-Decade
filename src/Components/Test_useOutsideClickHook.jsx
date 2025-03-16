import { useRef, useState } from "react"
import UseOutSideClick from "./Custom_useOutsideClickHook";

export default function UseOnClickOutSideTest(){

    const [showContent, setShowContent] = useState(false);
    const ref =  useRef();
    UseOutSideClick(ref, () => setShowContent(false));

    return <div>

        {
            showContent ? <div ref={ref} className="flex flex-col justify-center items-center w-[400px] h-[250px] p-2 space-y-3 text-center text-xl bg-purple-300 font-semibold text-white border rounded-full">
                <h1>This is a random Content</h1>
                <p>Please Click OutSide of This to Close This. It Won't Close if you Click Inside This Content!</p>
            </div> : <button className="bg-black text-white py-2 px-3 rounded-full hover:shadow-md hover:scale-110" onClick={()=> setShowContent(true)}>Show Content</button>
        }

    </div>
}

