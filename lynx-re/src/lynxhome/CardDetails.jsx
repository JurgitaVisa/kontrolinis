import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/logo1.jpg';
import img2 from '../img/logo2.jpg';
import img3 from '../img/logo3.jpg';

import Modal from '../common/Modal';


const CardDetails = (props) => {
    console.log(props);
    // pakeiti props ir pavadinimus
    const { id, name, text, person, type } = props.item;
    const img = props.item.picture === "logo1" ? img1 : (props.item.picture === "logo2" ? img2 : img3);

    return (
        <div >
            <div className="media pt-3">
                <img className="align-self-start mr-3" src={img} alt={name} />
                <div className="media-body">
                    <h5 className="mt-0">{name}</h5>
                    <p>{text}</p>
                    <p>Asmuo: {person}</p>
                    <p>Tipas: {type} </p>

                </div>
            </div>

            <div className='row py-5'>
                {/* <button
                    // pakeisti onclick event
                    onClick={() => props.onDelete(props.item)}
                    className="btn btn-danger ml-3 mr-2">
                    Ištrinti
                    </button> */}
                <button type="button" className="btn btn-danger ml-3 mr-2" data-toggle="modal" data-target="#staticBackdrop">
                    Ištrinti
                </button>
                <Modal onDelete={props.onDelete} item={props.item} />
                <Link to={`/admin/${id}`} className="btn btn-primary mr-2">Koreguoti</Link>
                <Link to={'/'} className="btn btn-outline-dark">Pradinis</Link>
            </div>



        </div>

    )
}

export default CardDetails;