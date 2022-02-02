import { useState, useEffect } from "react";


const useJsonFetch = url => {
    const [data, setData] = useState(null)
    const [hasError, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchList = async () => {
            const response = await fetch(url)
            setLoading(true);
            if (!response.ok) {
                setError(response.status)
                setLoading(false)
                throw new Error(response.statusText)
            }
            const json = await response.json()
            setData(json)
            setLoading(false)
        }
        fetchList();
    },[])

    return [{
        "data": data,
        "error": hasError,
        "loading": isLoading
    }]
}


export default useJsonFetch;