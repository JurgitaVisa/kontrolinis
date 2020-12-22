import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <p className="ml-2">Puslapis nerastas</p>
            <Link to="/" className="btn btn-primary ml-2">Pradinis</Link>
        </div>
    );
}

export default NotFound;