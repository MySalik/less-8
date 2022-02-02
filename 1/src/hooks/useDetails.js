import { useEffect, useState } from "react";
import useFetch from "./useFetch";


const useDetails = id => {
    const [{data, error, loading}] = useFetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)

    return [{
        "data": data,
        "error": error,
        "loading": loading
    }]
}


export default useDetails;