import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactFlow from 'react-flow-renderer';
import './NetworkGraph.css';
import PriorityQueue from  '../../utils/PriorityQueue'

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

  var q = new PriorityQueue(); // vertex Priority Queue
  source["dist"] = 0;

  vertex.forEach((v) => { 
    if (v.id !== source.id) {
      v["dist"] = Infinity;
      v["prev"] = null;
    }
    q.enqueue(v); 
  });


  let u = null;
  let v = null;
  let v_id = null;
  let path_dist = null;
  let neighbors = [];
  let links = [];

  while (!q.isEmpty()) {
    u = q.dequeue();  // extract min distance vertex
    console.log(u);
    neighbors = findNeighbors(u.id, edges);
    neighbors.forEach((edge) =>{

      path_dist = u.dist + edge.label;
      v_id = getLinkedNodeId(u.id, edge);

      v = q.get(v_id);
      if (v != -1) {

        if (path_dist < v.dist) {
          v.dist = path_dist;
          v.prev = u;
          q.enqueue(v);
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