import React from 'react';

const List = ({ data, onRemove }) => {

    return (

        <table className="table">
            <tbody >
                {data.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>
                        <button onClick={() => onRemove(item)} className="btn btn-danger btn-sm ml-5">Pašalinti</button>
                    </td>
                </tr>)}

            </tbody>
        </table>
    );

}

export default List;