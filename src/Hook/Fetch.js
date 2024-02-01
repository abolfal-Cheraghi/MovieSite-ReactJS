import { useState } from "react";


function useFetch(url){
    const [data , setData] = useState(null)
    const [isPending , setIsPending] = useState(true) 
    fetch(url)
    .then(respone => respone.json())
    .then(datas => {
        setData(datas);
        setIsPending(false)
    })
    .catch(err => console.log('Error fetch'))

    return data
}

export default useFetch