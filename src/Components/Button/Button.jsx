import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
var classNames = require('classnames');

class Button extends Component {
    render(){
        var me      = this,
            props   = me && me.props,
            size    = props.size,
            label   = props.label,
            onClick = props.onClick,
            btnClass = classNames({
                'btn'       : true,
                'btn-sm'    : size === 'sm', 
                'btn-md'    : size === 'md',
                'btn-lg'    : size === 'lg',
                'btn-xl'    : size === 'xl',
            });

        return(
            <button className={btnClass} onClick={onClick}>
                <span>{label}</span>
            </button>
        );
    }
    
}

Button.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

Button.defaultProps = {
    label: '',
    size: 'md',
    onClick: () => null
}

export default Button;