import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img from "../img/image.jpg";
import Table from '../common/Table'

class PlaceTable extends Component {
    columns = [
        {
            key: 'id',
            path: 'id',
            label: '#',
            content: person => <span>{place.id}</span>
        },
        {
            key: 'picture',
            path: 'picture',
            label: 'Foto',
            content: () => <span> <img src={img} alt="atsitiktinis" /></span>
        },
        {
            key: 'name',
            path: 'name',
            label: 'Vardas',
            content: person => <Link to={`/place/${place.id}`}>{place.name}</Link>
        },

        {
            key: 'address',
            label: 'Adresas',
            content: person => <span>{place.address}</span>
        },

        {
            key: 'delete',
            content: place => <button onClick={() => this.props.onDelete(place)} className="btn btn-danger btn-sm">Ištrinti</button>
        }
    ]


    render() {
        const { places } = this.props;

        return (
            <Table
                columns={this.columns}
                data={places}

            />
        );
    }
}


export default PlaceTable;