import React, { useEffect, useState } from 'react';   // shortcut imrc
// import { ListGroup, ListGroupItem } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './AlgosList.css';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
  }));
  
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function AlgosList() {

    const [algosList, setAlgosList] = useState(null);   // getter and setter (algosList init to null..)
    const classes = useStyles();

    useEffect(() => { // do something on render

    // fetch return a promess async -> then once its completed do something..
    fetch('/api/algos-info')
        .then((reponse) => reponse.json()) // parse the body of the response to json
        .then((data) => {   // json
            setAlgosList(data); // re-render the screen 
        });
    }, []); // [algosList] dependancy array, useEffect() only when algosList change

    return (
        <div className={classes.root}>
            <h2 className='center'>Algorithms</h2>
            <List component="nav">
                {
                    algosList ? algosList.map(algo =>   // if algosList != null 
                        <div key={algo.id}>
                            <ListItemLink href={`/api/algos-info/${algo.id}`}>
                                <ListItemText className='center' primary={algo.name}/>
                            </ListItemLink> 
                        </div>
                    ) : 'Loading..'  // else loading data
                }
            </List>
      </div>
    );

}
 
export default AlgosList;