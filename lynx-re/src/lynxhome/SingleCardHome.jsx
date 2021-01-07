import React from 'react';

import '../index.css';

import img1 from '../img/logo1.jpg';
import img2 from '../img/logo2.jpg';
import img3 from '../img/logo3.jpg';

//import itemImg from "../img/samsung-big.jpg";
import { Link } from 'react-router-dom';


function SingleCardHome(props) {
    // pakeisti props pavadinimus ir nuotraukas
    const { id, name, text, person, picture, type } = props.item;
    console.log(id);
    // const itemImg = props.picture;
    const itemImg = picture === "logo1" ? img1 : (picture === "logo2" ? img2 : img3);


    return (
        <div className="col d-flex justify-content-center pb-2">
            <div className="card" >
                <div className="text-center">
                    <img src={itemImg} className="home-card card-img-top py-5" alt={name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{text}</p>

                    <p>Asmuo: {person}</p>

                    <p>Tipas: {type}</p>

                    <Link to={`congratulation/${id}`} className="btn btn-primary">Peržiūrėti</Link>

                </div>
            </div>

        </div>

    );

}

export default SingleCardHome;