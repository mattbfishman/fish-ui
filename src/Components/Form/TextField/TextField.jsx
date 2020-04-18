import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextField.scss';
var classNames = require('classnames');

class TextField extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            label       = props && props.label,
            placeholder = props && props.placeholder,
            size        = props && props.size,
            labelEle,
            inputClass = classNames({
                'text-input sm'    : size === 'sm', 
                'text-input md'   :  size === 'md',
                'text-input lg'    : size === 'lg',
                'text-input xl'    : size === 'xl',

            });

        if(label){
            labelEle = (
                <label className="text-input-label">{label}:</label>
            )
        }
        return(
            <div className="textinput-div">
                {labelEle}
                <input className={inputClass} placeholder={placeholder}/>
            </div>
        );
    }
    
}

TextField.propTypes = {
    size: PropTypes.string,
    placeholder: PropTypes.string
}

TextField.defaultProps = {
    placeholder: '',
    size: 'md'
}

export default TextField;