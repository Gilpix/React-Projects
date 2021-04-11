import React, { useEffect } from 'react'


export const useFetch = (url) => {

    const [data, setData] = React.useState([]);

    const getData = async () => {

        const response = await fetch(url);
        const dataJSON = await response.json();
        setData((dataJSON.items).slice(0, 152));

    }

    useEffect(() => {
        getData();
    })


    return { data };
}