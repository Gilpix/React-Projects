import React, { useEffect } from 'react'

export const useFetch = (url) => {

    const [data, setData] = React.useState([]);

    const getData = async () => {

        const response = await fetch(url);
        const data = await response.json();

        setData(data);

    }

    useEffect(() => {
        getData();

    }, [])

    return { data };
}