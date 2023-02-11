import { useState, useEffect } from "react"

const useAsync=(asyncFunc, dependecies)=>{
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)

    if(!Array.isArray(dependecies)){
        console.error("No se esta pasando un Array como dependencia")
        dependecies=[]

    }

    useEffect(() => {
        setLoading(true)

        asyncFunc()
            .then(data=>{
                setData(data)
            })
            .catch(error=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, dependecies) //eslint-disable-line

    return{
        data,
        error,
        loading
    }
    
}

export default useAsync