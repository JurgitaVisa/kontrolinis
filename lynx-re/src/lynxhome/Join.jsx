import React from 'react';

const Join = ({ options, onAddToList }) => {

    return (
        <div>
            <h5 className="font-weight-bold py-3">Susieti su asmeniu</h5>


            <form onSubmit={onAddToList}>
                <div className="form-group">
                    <label htmlFor="input">Pasirinkti :</label>
                    <select name="input" id="input" className="form-control" >
                        <option value=""></option>
                        {options.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>

                </div>

                <button type="submit" className="btn btn-primary">Susieti</button>
            </form>



        </div>
    );

}

export default Join;