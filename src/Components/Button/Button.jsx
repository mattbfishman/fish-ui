import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
var classNames = require('classnames');

class Button extends Component {
    render(){
        var me      = this,
            props   = me && me.props,
            size    = props && props.size,
            text    = props && props.text,
            btnClass = classNames({
                'btn'       : true,
                'btn-sm'    : size === 'sm', 
                'btn-md'    : size === 'md',
                'btn-lg'    : size === 'lg',
                'btn-xl'    : size === 'xl',
            });

        return(
            <button className={btnClass}>
                <span>{text}</span>
            </button>
        );
    }
    
}

Button.propTypes = {
    size: PropTypes.string,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    size: 'md'
}

export default Button;