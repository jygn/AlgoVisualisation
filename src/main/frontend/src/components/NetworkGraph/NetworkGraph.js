import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactFlow from 'react-flow-renderer';
import './NetworkGraph.css';
import PriorityQueue from  '../../utils/PriorityQueue'

/**
 * Source: https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 * 
 * Dijkstra algorithm using PriorityQueue
 * 
 */
function dijkstra(elems, source) {


  // extract vertex from elements 
  var vertex = elems.filter((el) => el.className === "nodestyle");  
  // extract edges from elements
  var edges = elems.filter((el => el.className === "edgestyle"));

  var q = new PriorityQueue(); // vertex Priority Queue
  source["dist"] = 0;

  // dist and previous vertex initialization
  vertex.forEach((v) => { 
    if (v.id !== source.id) {
      v["dist"] = Infinity;
      v["prev"] = null;
    }
    q.enqueue(v); 
  });

  while (!q.isEmpty()) {

    let neighbors = [];
    let u = null;

    u = q.dequeue();  // extract min distance vertex
    console.log(u);
    neighbors = findNeighbors(u.id, edges);

    neighbors.forEach((edge) => {
      let path_dist = null;
      let v_id = null;
      let v = null;

      path_dist = u.dist + edge.label;
      v_id = getLinkedNodeId(u.id, edge);

      v = q.get(v_id);

      if (v) {
        if (path_dist < v.dist) {
          v.dist = path_dist;
          v.prev = u;
          q.update(v);
        }
      }
    })
  }
}

const getLinkedNodeId = (id, edge) => {
  if (edge.target !== id)
    return edge.target
  else return edge.source;
} 

const findNeighbors = (id, edges) => {
  return edges.filter((edge) => (edge.source === id || edge.target === id));
}

const getElemById = (elems, id) => {
  var el = null;
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