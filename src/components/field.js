import React from 'react';

const Field = (props) => {
    const {labelText, type, placeholder, name, value,onChange, id, error} = props;
    return (
        <div className="form-group">
            <label htmlFor={id}>{labelText}</label>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                id={id}
            />
            {{error} ? (
                <div className="invalid-feedback">
                    {error}
                </div>
            ) : null}

        </div>
    )
}

export default Field;