import React, { useState, useEffect } from 'react';
import AlgoList from './AlgosList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Loading from './components/Loading';

function Home() {

    const [algosList, setAlgosList] = useState(null);   // getter and setter (algosList init to null..)
    useEffect(() => { // do something on render
        // fetch return a promess async -> then once its completed do something..
        fetch('/api/algos-info')
            .then((reponse) => reponse.json()) // parse the body of the response to json
            .then((data) => {   // json
                setAlgosList(data); // re-render the screen 
            });
    }, []); // [algosList] dependancy array, change in component => re-render component => run useEffect

    return (
        <>
            { 
                algosList ? 
                    <AlgoList algosList={algosList}/>
                : <Loading/>
            } 
        </> 
    );
}
 
export default Home;