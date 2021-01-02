import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios" ;

const AlgosInfo = () => { // AlgosInfo component

  const [algosInfos, setAlgosInfo] = useState([]);

  const fetchAlgosInfo = () => {
    axios.get("http://localhost:8080/api/algos-info").then(res => {
      console.log(res);
      setAlgosInfo(res.data);
    });
  };

  useEffect(() => {
    fetchAlgosInfo();
  }, []);

  return algosInfos.map((algoInfos, index) => {
    
    return (
      <div>
        <h1>{algoInfos.name}</h1>
        <p>{algoInfos.description}</p>
        <p>{algoInfos.complexity}</p>
      </div>
    )
  })
};

function App() {
  return (
    <div className="App">
      <AlgosInfo />
    </div>
  );
}

export default App;
