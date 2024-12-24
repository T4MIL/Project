import React, { useEffect, useState } from 'react'
export const useFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fun1()
    }, [url])
    function fun1() {
        fetch(url)
            .then((res) => res.json())
            .then((alldata) => setData(alldata.products))
    }
    return data
}
