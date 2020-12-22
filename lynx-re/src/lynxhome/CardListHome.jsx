import React, { Component } from 'react';

import apiEndpoint from '../configuration';
import httpService from '../services/httpService';

import SingleCardHome from './SingleCardHome';


class CardListHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        httpService.get(`${apiEndpoint}/api/congratulations`)
            .then((items) => {
                this.setState({ items: items });
            }).catch(error => {
                //return this.props.history.replace("/not-found");
            });
    }


    render() {
        const { data } = this.state.items;

        if (data) {
            return (

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 ">
                    {data.map(item => {
                        return <SingleCardHome key={item.id} id={item.id} item={item} />;
                    })}

                </div>

            );

        } else {
            return (
                <p className="ml-2">Bandom įkelti duomenis...</p>
            )
        }

    }
}


export default CardListHome;