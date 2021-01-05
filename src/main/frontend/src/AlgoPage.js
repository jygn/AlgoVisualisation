import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// components
import AppNav from './AppNav';
import NetworkGraph from './NetworkGraph';


function AlgoPage() {

    const [algo, setAlgo] = useState(null);
    const { id } = useParams();
    console.log("id: ", id);

    useEffect(() => {
        fetch(`/api/algos-info/${ id }`)
            .then((response) => response.json())
            .then((data) => {
                setAlgo(data);
            });
    }, [id]);

    return (
        algo ? 
        <>
            <AppNav/>
            <h2> { algo.name } </h2>
            <NetworkGraph/>
        </>
        : 'Loading...'
    )
}

export default AlgoPage;