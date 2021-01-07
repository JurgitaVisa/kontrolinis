import React, { Component } from 'react';
import apiEndpoint from '../configuration';
import httpService from '../services/httpService';

import CardDetails from './CardDetails';
import SearchBox from '../common/SeachBox';
import List from './List';
import Join from './Join';

class DetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            places: [],
            options: [],
            searchQuery: '',
            currentId: ''
        }
    }

    componentDidMount() {
        const currentId = this.props.match.params.id;
        this.setState({ currentId: currentId });

        httpService
            .get(`${apiEndpoint}/api/congratulations/${currentId}`)
            .then(response => this.setState({ item: response.data }))
            .catch(error => {
                return this.props.history.replace("/");
            });

        httpService
            .get(`${apiEndpoint}/api/congratulations/places/${currentId}`)
            .then((response) => {
                this.setState({ places: response.data });
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        httpService
            .get(`${apiEndpoint}/api/places`)
            .then((response) => {
                this.setState({ options: response.data });
                console.log(response);
            });

    }

    handleDelete = item => {
        console.log("try to delete item id:", item.id);

        httpService.delete(`${apiEndpoint}/api/congratulations/${item.id}`).then(() => { this.props.history.push("/") });

    }

    handleSearch = (e) => {

        const name = e.currentTarget.value;
        console.log(name);

        this.setState({ searchQuery: name });


    }

    handleRemoveFromList = listItem => {
        const { currentId } = this.state;

        console.log("try to remove list item id:", listItem.id);

        httpService.delete(`${apiEndpoint}/api/congratulations/${currentId}/places/${listItem.id}`).then((response) => {
            this.setState({ places: response.data });
        });

        let back = () => { this.props.history.push(`/congratulations/${currentId}`) }
        back();

    }

    handleAddToList = e => {
        e.preventDefault();
        const { currentId } = this.state;
        console.log(currentId);

        console.log("try to add to list item id:", e.target.input.value);

        httpService.post(`${apiEndpoint}/api/congratulations/${currentId}/places/${e.target.input.value}`).then();

        // this.props.history.push(`/`);

        e.target.reset();

    }


    render() {
        const { options } = this.state;

        if (this.state.item !== null) {
            const { item, places } = this.state;
            const { length: totalCount } = this.state.places;

            return (
                <React.Fragment>

                    <CardDetails key={item.id}
                        item={item}
                        onDelete={this.handleDelete}
                    />

                    <p >Rasta susijusių įrašų: {totalCount}</p>

                    {totalCount > 0 && <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />}

                    <List data={places} onRemove={this.handleRemoveFromList} />

                    <Join onAddToList={this.handleAddToList} options={options} />

                </React.Fragment>

            )
        } else {
            return (<p className="ml-2">Bandom įkelti duomenis...</p>)
        }
    }
}



export default DetailsContainer