import { useEffect } from "react";
import { useState } from "react";


export default function useFetch(url, options={}){

    const [data, setData] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData(){
        try{
            setLoading(true);

            const response = await fetch(url, {...options});
            if(!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
            setLoading(false);
        }catch(error){
            setError(error);
            setLoading(false);
        }
    }


    useEffect(()=> {
        fetchData();
    },[url])

    return {data, error, Loading};
}
