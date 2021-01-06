import React from 'react';
import ReactFlow from 'react-flow-renderer';
import './NetworkGraph.css';

const elements = [
  {
    id: '1',
    sourcePosition: 'right',
    type: 'input',
    data: { label: 'A' },
    position: { x: 0, y: 80 },
    connectable : false
  },
  {
    id: '2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'B' },
    position: { x: 250, y: 0 },
    connectable : false
  },
  {
    id: '3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'C' },
    position: { x: 250, y: 160 },
    connectable : false
  },
  {
    id: '4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'D' },
    position: { x: 500, y: 0 },
    connectable : false
  },
  {
    id: '5',
    sourcePosition: 'top',
    targetPosition: 'bottom',
    data: { label: 'E' },
    position: { x: 400, y: 90 },
    connectable : false
  },
  {
    id: '6',
    sourcePosition: 'bottom',
    targetPosition: 'top',
    data: { label: 'F' },
    position: { x: 500, y: 230 },
    connectable : false
  },
  {
    id: '7',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'G' },
    position: { x: 750, y: 50 },
    connectable : false

  },
  {
    id: '8',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'H' },
    position: { x: 750, y: 300 },
    connectable : false
  },
  {
    id: 'e1-2',
    source: '1',
    type: 'smoothstep',
    target: '2',
    animated: true,
  },
  {
    id: 'e1-3',
    source: '1',
    type: 'smoothstep',
    target: '3',
    animated: true,
  },
  {
    id: 'e1-5',
    source: '1',
    type: 'smoothstep',
    target: '5',
    animated: true,
  },
  {
    id: 'e2-4',
    source: '2',
    type: 'smoothstep',
    target: '4',
    label: 'edge label',
    animated: true
  },
  {
    id: 'e3-5',
    source: '3',
    type: 'smoothstep',
    target: '5',
    animated: true,
  },
  {
    id: 'e3-6',
    source: '3',
    type: 'smoothstep',
    target: '6',
    animated: true,
  },
  {
    id: 'e5-7',
    source: '5',
    type: 'smoothstep',
    target: '7',
    animated: true,
  },
  {
    id: 'e6-8',
    source: '6',
    type: 'smoothstep',
    target: '8',
    animated: true,
  },
];

  // function ran() {
  //   return "" + Math.ceil(Math.random() * (10 - 1) + 1);
  // }

function NetworkGraph() {
  return (
    <div style={{ height: 400 }}>
      <ReactFlow elements={elements} />
  </div>
  );
}
export default NetworkGraph