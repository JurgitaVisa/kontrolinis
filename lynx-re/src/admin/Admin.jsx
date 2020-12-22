import React, { Component } from 'react';


import apiEndpoint from '../configuration';
import httpService from '../services/httpService';


import { Link } from 'react-router-dom';

import AdminTable from './AdminTable';
import SearchBox from '../common/SeachBox';

export default class Admin extends Component {
    state = {
        congratulations: [],
        searchQuery: ''
    }

    componentDidMount() {
        httpService
            .get(`${apiEndpoint}/api/congratulations`)
            .then((response) => {
                this.setState({ congratulations: response.data });
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    handleDelete = (item) => {
        const id = item.id;

        httpService.delete(`${apiEndpoint}/api/congratulations/${id}`).then(() => {
            const filtered = this.state.congratulations.filter(itm => itm.id !== item.id);
            this.setState({ congratulations: filtered });
        });

    }

    handleSearch = (e) => {
        const name = e.currentTarget.value;

        this.setState({ searchQuery: name });

        httpService.get(`${apiEndpoint}/api/congratulations?name=${name}`).then((response) => {
            // const filtered = this.state.products.filter(itm => itm.title !== title);
            this.setState({ congratulations: response.data });
        });
    }


    render() {

        const { length: totalCount } = this.state.congratulations;


        return (
            <div>

                <Link to="admin/new" className="btn btn-primary my-2">Pridėti naują</Link>
                <p >Rasta : {totalCount}</p>
                <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />

                <AdminTable
                    congratulations={this.state.congratulations}
                    onDelete={this.handleDelete}
                />

            </div>

        )
    }
}
