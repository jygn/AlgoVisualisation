import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactFlow from 'react-flow-renderer';
import './NetworkGraph.css';

/**
 * Source: https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 * 
 * @param {elements of the graph (edges and nodes)} elems 
 * @param {*} source 
 * 
 */
function dijkstra(elems, source) {


  var vertex = elems.filter((el) => el.className === "nodestyle");
  var edges = elems.filter((el => el.className === "edgestyle"));

  // var q = new PriorityQueue(); // vertex set TODO
  source["dist"] = 0;

  vertex.forEach((v) => { 
    if (v.id != source.id) {
      v["dist"] = Infinity;
      v["prev"] = null;
    }
    // q.enqueue(v.dist); TODO
  });


  // while (q.length != 0) {

    

  // }

}

const getElemById = (elems, id) => {
  var el;
  for (var key in elems) {
    el = elems[key];
    if (el.id === id)
      return el;
  }
}


function NetworkGraph({elements}) {

  const [elems, setElems] = useState(elements);

  // const delay = (ms) => { setTimeout(res, ms) };

  const test = () => {
    setElems(elems.map((el) => {
      if (el.source) // edge?
          el.label = 1;
      return el;
    }))


    dijkstra(elements, getElemById(elems, 'a'));
  }

  return (
    <>
      <div style={{ height: 400, width: 1000 }}>
        <ReactFlow elements={elems} 
        zoomOnScroll = {false}
        paneMoveable = {false}
        zoomOnDoubleClick = {false}  />
      </div>
      <Button onClick={test}>Run</Button>
    </>
  );
}
export default NetworkGraph