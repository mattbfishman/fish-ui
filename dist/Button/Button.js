import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

var classNames = require('classnames');

class Button extends Component {
  render() {
    var me = this,
        props = me && me.props,
        size = props && props.size,
        label = props && props.label,
        btnClass = classNames({
      'btn': true,
      'btn-sm': size === 'sm',
      'btn-md': size === 'md',
      'btn-lg': size === 'lg',
      'btn-xl': size === 'xl'
    });
    return (
      /*#__PURE__*/
      React.createElement("button", {
        className: btnClass
      },
      /*#__PURE__*/
      React.createElement("span", null, label))
    );
  }

}

Button.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string.isRequired
};
Button.defaultProps = {
  size: 'md'
};
export default Button;