import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import apiEndpoint from '../configuration';
import httpService from '../services/httpService';

import SingleCard from './SingleCard';




class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],

        };
    }

    componentDidMount() {
        httpService
            .get(`${apiEndpoint}/api/places`)
            .then((response) => {
                this.setState({ places: response.data });
                //console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleDelete = (item) => {
        const id = item.id;
        console.log("card list trinti", id)
        httpService.delete(`${apiEndpoint}/api/places/${id}`).then(() => {
            const filtered = this.state.places.filter(itm => itm.id !== id);
            this.setState({ places: filtered });
        });

    }

    render() {
        const data = this.state.places;
        //console.log(this.state.persons);

        if (data) {
            return (

                <div>

                    <Link to="place/new" className="btn btn-primary my-2">Pridėti naują</Link>
                    <p >Rasta viso: {data.length}</p>


                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 ">
                        {data.map(item => {
                            return <SingleCard key={item.id} id={item.id} item={item} onDelete={this.handleDelete} />;
                        })}

                    </div>
                </div>

            );

        } else {
            return (
                <p className="ml-2">Bandom įkelti duomenis...</p>
            )
        }

    }
}


export default CardList;