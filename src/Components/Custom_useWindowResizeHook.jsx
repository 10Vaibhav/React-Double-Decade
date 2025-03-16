import { useLayoutEffect, useState } from "react";

export default function useWindowResize(){

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    function handleResize(){
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    // Diff btw useLayoutEffect and useEffect
    // useEffect will only load when the all dom elements will render in our browser.
    // useLayoutEffect called before that.

    useLayoutEffect(()=> {

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    },[]);

    return windowSize
}

