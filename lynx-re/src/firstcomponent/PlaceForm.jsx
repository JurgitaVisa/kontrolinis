import React from 'react';
import Joi from 'joi-browser';

import apiEndpoint from '../configuration';
import httpService from '../services/httpService';
import Form from '../common/Form';


class PlaceForm extends Form {
    state = {
        data: { name: "", address: "" },
        selectOptions: ["/somepic"],
        // selectTypeOptions: ["TVkanalas", "Interneto adresas"],
        errors: {},
        placeId: ""
    };

    schema = {
        id: Joi.string(),
        name: Joi.string().required().label('Name'),
        address: Joi.string().allow('').optional(),
        picture: Joi.string().allow('').optional()
    }

    componentDidMount() {
        const placeId = this.props.match.params.id;
        this.setState({ placeId: placeId });

        if (placeId === "new") return;

        httpService.get(`${apiEndpoint}/api/places/${placeId}`)
            .then((response) => {
                this.setState({ data: this.mapToViewModel(response.data) });
            });

    }

    mapToViewModel(place) {
        return {
            name: place.name,
            address: place.address
        }
    };

    doSubmit = () => {

        if (this.state.placeId === "new") {
            httpService.post(`${apiEndpoint}/api/places`, this.state.data);
            //console.log(this.state.data);

        } else {
            httpService.put(`${apiEndpoint}/api/places/${this.state.placeId}`, this.state.data);
            //console.log(this.state.data);
        }

        this.setState({ name: "", address: "" });

        let back = () => { this.props.history.push("/placecard") };
        back();
    }

    render() {

        return (
            <div >

                <h5 className="pb-3">Duomenų Forma</h5>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Vietos pavadinimas')}
                    {this.renderInput('address', 'Adresas')}
                    {this.renderSelect('picture', 'Paveikslėlis', this.state.selectOptions)}
                    {this.renderButton('Saugoti')}
                </form>

            </div>

        );
    }
}

export default PlaceForm;