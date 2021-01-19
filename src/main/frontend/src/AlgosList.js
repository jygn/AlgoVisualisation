import React from 'react';   // shortcut imrc
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import './AlgosList.css';
import Loading from './components/Loading/Loading';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
function ListItemLink(props) {
    return <ListItem button {...props} />;
}

function AlgosList({algosList}) {

    const classes = useStyles();

    return ( // onClick={ () => setId(id) }
        <>
            <div className={classes.root}>
                <div className='list-container'>
                    <h2>Algorithms</h2>
                    <List component="nav">
                        {
                            algosList ? algosList.map(algo =>   // if algosList != null 
                                <div key={algo.id}>
                                    <ListItemLink>
                                        <Link to={`/api/home/algos-info/${algo.id}`}> 
                                            <ListItemText className='center' primary={algo.name}/> 
                                        </Link>
                                    </ListItemLink> 
                                </div>
                            ) : <Loading/>  // else loading data
                        }
                    </List>
                </div>
            </div>
        </>
    );

}
 
export default AlgosList;