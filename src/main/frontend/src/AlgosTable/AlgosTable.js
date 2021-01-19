import React, { useState, useEffect } from 'react';
import './AlgosTable.css';
import Loading from '../components/Loading/Loading';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'complexity', headerName: 'Complexity', width: 130 }
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const createRow = (algo) => {
    return {id: algo.id, name: algo.name, description: algo.description, complexity: algo.complexity}
}

export default function AlgosTable() {

    const [algosList, setAlgosList] = useState([]);

    var rows =[];
    useEffect(() => {
        fetch('/api/algos-info')
            .then((res) => res.json())
            .then((data) => {
                for (var key in data) {
                    var algo = data[key];
                    rows.push(createRow(algo));
                }
                setAlgosList(rows);
            })
    }, []);

    return (
        <>
            <Link to='/api/add-algo-info'>
                <Button>Add</Button>
            </Link>
            <div style={{ height: 400, width: '100%' }}>
                {
                    algosList.length > 0 ?
                        <DataGrid rows={algosList} columns={columns} pageSize={5} checkboxSelection />
                    : <Loading/>    
                }
            </div>
        </>
    );
}