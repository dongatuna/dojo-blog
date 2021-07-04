import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    //use effect runs on every render
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
        }, 1000);
        
    //    console.log(`blogs ${blogs}`)
    }, [url]) //empty array depencies ensures use effect only runs after the first render
  
    return { data, isPending, error}
}
 
export default useFetch;