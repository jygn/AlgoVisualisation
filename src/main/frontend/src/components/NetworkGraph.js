import React from 'react';
import ReactFlow from 'react-flow-renderer';
import './NetworkGraph.css';

function NetworkGraph({elements}) {

  return (
    <>
      <div style={{ height: 400, width: 1000 }}>
        <ReactFlow elements={elements} 
        zoomOnScroll = {false}
        paneMoveable = {false}
        zoomOnDoubleClick = {false}  />
      </div>
    </>
  );
}
export default NetworkGraph