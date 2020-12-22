import React from 'react';
import Joi from 'joi-browser';

import apiEndpoint from '../configuration';
import httpService from '../services/httpService';
import Form from '../common/Form';


class AdminForm extends Form {
    state = {
        data: { name: "", text: "", picture: "", person: "", type: "" },
        selectOptions: ["logo1", "logo2", "logo3"],
        selectTypeOptions: ["Gyvas", "Per TV", "Internetinis"],

        errors: {},
        currentId: ""
    };

    schema = {
        id: Joi.string(),
        name: Joi.string().required().label('Name'),
        text: Joi.string().required().label('Text'),
        picture: Joi.string().allow('').optional(),
        person: Joi.string().required().label('Person'),
        type: Joi.string().required().label('Type')
    }

    componentDidMount() {
        const currentId = this.props.match.params.id;
        this.setState({ currentId: currentId });

        if (currentId === "new") return;

        httpService.get(`${apiEndpoint}/api/congratulations/${currentId}`)
            .then((response) => {
                this.setState({ data: this.mapToViewModel(response.data) });
            });

    }

    mapToViewModel(data) {
        return {
            name: data.name,
            text: data.text,
            picture: data.picture,
            person: data.person,
            type: data.type
        }
    };

    doSubmit = () => {

        if (this.state.currentId === "new") {
            httpService.post(`${apiEndpoint}/api/congratulations`, this.state.data);
            //console.log(this.state.data);

        } else {
            httpService.put(`${apiEndpoint}/api/congratulations/${this.state.currentId}`, this.state.data);
            //console.log(this.state.data);
        }

        this.setState({ data: { name: "", text: "", picture: "", person: "", type: "" } });

        let back = () => { this.props.history.push("/admin") };
        back();
    }

    render() {

        return (
            <div >

                <h5 className="pb-3">Administratoriaus Forma</h5>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Pavadinimas')}
                    {this.renderInput('text', 'Tekstas')}
                    {this.renderSelect('picture', 'Paveikslėlio url', this.state.selectOptions)}
                    {this.renderInput('person', 'Asmuo')}
                    {this.renderSelect('type', 'Tipas', this.state.selectTypeOptions)}

                    {this.renderButton('Saugoti')}
                </form>

            </div>

        );
    }
}

export default AdminForm;