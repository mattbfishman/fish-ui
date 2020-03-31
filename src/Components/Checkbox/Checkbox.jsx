import React, {Component} from 'react';
import './Checkbox.scss';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            label       = props && props.label,
            name        = props && props.name;

        return (
            <div className="checkbox-container">
                <input name={name} type="checkbox"/>
                <label>{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string
}

Checkbox.defaultProps = {
    label: '',
    name: ''
}

export default Checkbox;