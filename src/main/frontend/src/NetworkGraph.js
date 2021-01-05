import { Fragment } from "react";
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
    nodes: [{ id: "A" }, { id: "B" }, { id: "C" }],
    links: [
      { source: "A", target: "B" },
      { source: "A", target: "C" },

    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    "automaticRearrangeAfterDropNode": false,
    "collapsible": false,
    "directed": false,
    "focusAnimationDuration": 0,
    "focusZoom": 0,
    "freezeAllDragEvents": true,
    "height": 400,
    "highlightDegree": 1,
    "highlightOpacity": 1,
    "linkHighlightBehavior": false,
    "maxZoom": 0,
    "minZoom": 0,
    "nodeHighlightBehavior": false,
    "panAndZoom": false,
    "staticGraph": false,
    "staticGraphWithDragAndDrop": false,
    "width": 800,
    "d3": {
      "alphaTarget": 0.05,
      "gravity": -300,
      "linkLength": 100,
      "linkStrength": 1,
      "disableLinkForce": false
    },
    "node": {
      "color": "#d3d3d3",
      "fontColor": "black",
      "fontSize": 18,
      "fontWeight": "normal",
      "highlightColor": "SAME",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "highlightStrokeColor": "SAME",
      "highlightStrokeWidth": "SAME",
      "labelProperty": "id",
      "mouseCursor": "mouse",
      "opacity": 1,
      "renderLabel": true,
      "size": 500,
      "strokeColor": "black",
      "strokeWidth": 1,
      "svg": "",
      "symbolType": "circle"
    },
    "link": {
      "color": "black",
      "fontColor": "red",
      "fontSize": 20,
      "fontWeight": "normal",
      "highlightColor": "black",
      "highlightFontSize": 8,
      "highlightFontWeight": "normal",
      "labelProperty": ran,
      "mouseCursor": "mouse",
      "opacity": 1,
      "renderLabel": true,
      "semanticStrokeWidth": false,
      "strokeWidth": 1,
      "markerHeight": 6,
      "markerWidth": 6,
      "strokeDasharray": 0,
      "strokeDashoffset": 0,
      "strokeLinecap": "butt"
    }
  };

  function ran() {
    return Math.ceil(Math.random() * (10 - 1) + 1);
  }
  // return Math.ceil(Math.random() * (10 - 1) + 1);
  
  const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };
  
  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };
  
  function NetworkGraph() {
    return (
        <Fragment>
            <Graph
                id="graph-id" // id is mandatory
                data={data}
                config={myConfig}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
            />
        </Fragment>
    )
  }
export default NetworkGraph