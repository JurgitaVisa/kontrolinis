import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../img/logo1.jpg';
import img2 from '../img/logo2.jpg';
import img3 from '../img/logo3.jpg';

import Table from '../common/Table';



class AdminTable extends Component {

    columns = [
        // {
        //     key: 'id',
        //     path: 'id',
        //     label: '#',
        //     content: institution => <span>{institution.id}</span>
        // },
        {
            key: 'picture',
            label: 'Paveikslėlis',
            content: congratulation =>
                <img src={congratulation.picture === "logo1" ? img1 : (congratulation.picture === "logo2" ? img2 : img3)}
                    alt={congratulation.picture} />
        },

        {
            key: 'name',
            path: 'name',
            label: 'Pavadinimas',
            content: congratulation => <Link to={`/admin/${congratulation.id}`}>{congratulation.name}</Link>
        },
        {
            key: 'text',
            path: 'text',
            label: 'Tekstas',
            content: congratulation => <span>{congratulation.text}</span>
        },
        {
            key: 'delete',
            content: congratulation => <button onClick={() => this.props.onDelete(congratulation)} className="btn btn-danger btn-sm">Ištrinti</button>
        }
    ]


    render() {
        const { congratulations } = this.props;

        return (
            <Table
                columns={this.columns}
                data={congratulations}

            />
        );
    }
}


export default AdminTable;