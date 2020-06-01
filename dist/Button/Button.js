import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

var classNames = require('classnames');

class Button extends Component {
  render() {
    var me = this,
        props = me && me.props,
        size = props.size,
        label = props.label,
        onClick = props.onClick,
        btnClass = classNames({
      'btn': true,
      'btn-sm': size === 'sm',
      'btn-md': size === 'md',
      'btn-lg': size === 'lg',
      'btn-xl': size === 'xl'
    });
    return /*#__PURE__*/React.createElement("button", {
      className: btnClass,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("span", null, label));
  }

}

Button.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
Button.defaultProps = {
  label: '',
  size: 'md',
  onClick: () => null
};
export default Button;