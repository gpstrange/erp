// Client / Components / Common / Inputs / Text Field

import React from 'react';
import classnames from 'classnames';

const InputText = ({ type, value, onChange, name, id, label, error, placeholder }) => {
    return (
        <div className={ classnames("form-group", { 'has-error': error }) }>
            <label htmlFor={ id }>{ label }</label>

            <input
                type={ type }
                value={ value }
                onChange={ onChange }
                name={ name }
                className="form-control"
                id={ id }
                placeholder={ placeholder }
            />

            { error && <span className="help-block">{ error }</span>}
        </div>
    );
};

InputText.propTypes = {
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    placeholder: React.PropTypes.string,
};

InputText.defaultProps = {
    type: 'text'
};

export default InputText;