import React, {Component} from 'react';
import './Checkbox.scss';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            label       = props && props.label;

        return (
            <div className="checkbox-container">
                <input type="checkbox"/>
                <label>{label}</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string
}

Checkbox.defaultProps = {
    label: ''
}

export default Checkbox;