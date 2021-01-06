import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

export default function Loading() {
    return (
        <>
            <div className='load-container'>
                <Spinner
                    animation="grow"
                    size="m"
                    role="status"
                />
                Loading...
            </div>
        </>
    )
}