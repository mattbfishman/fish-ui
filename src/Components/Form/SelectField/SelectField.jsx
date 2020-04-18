import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SelectField.scss';
import map from 'lodash/map';
var classNames = require('classnames');

class SelectField extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            options     = props && props.options,
            label       = props && props.label,
            size        = props && props.size,
            optionsEle  = map(options, function(option, index){
                return <option key={index} value={option.value}>{option.label}</option>;
            }),
            inputClass = classNames({
                'select-input sm'    : size === 'sm', 
                'select-input md'    : size === 'md',
                'select-input lg'    : size === 'lg',
                'select-input xl'    : size === 'xl',
            });
        
        return(
            <div className="selectinput-div">
                <label className="text-input-label">{label}:</label>
                <select className={inputClass}>
                    {optionsEle}
                </select>
            </div>
        );
    }
    
}

SelectField.propTypes = {
    options: PropTypes.array,
    label  : PropTypes.string,
    size: PropTypes.string
}

SelectField.defaultProps = {
    options: [],
    label  : '',
    size: 'md'
}

export default SelectField;