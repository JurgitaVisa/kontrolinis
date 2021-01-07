import React from 'react';
import { Link } from 'react-router-dom';

import '../index.css';
import img from '../img/image.jpg';

function SingleCard(props) {

    const { id, name, address } = props.item;
    console.log(id);

    return (
        <div className="col d-flex justify-content-center pb-2">
            <div className="card" >
                <div className="text-center">
                    <img src={img} className="place card-img-top pt-1" alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{`${name} `}</h5>
                    <p className="card-text">{address}</p>

                    <Link to={`place/${id}`} className="btn btn-primary mr-2">Koreguoti</Link>

                    <button onClick={() => props.onDelete(props.item)} className="btn btn-danger">Ištrinti</button>
                </div>
            </div>

        </div>

    );

}

export default SingleCard;