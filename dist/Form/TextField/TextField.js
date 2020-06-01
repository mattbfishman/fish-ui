import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.scss';

var classNames = require('classnames');

class TextField extends Component {
  render() {
    var me = this,
        props = me && me.props,
        label = props.label,
        placeholder = props.placeholder,
        size = props.size,
        update = props.update,
        id = props.id,
        labelEle,
        inputClass = classNames({
      'text-input sm': size === 'sm',
      'text-input md': size === 'md',
      'text-input lg': size === 'lg',
      'text-input xl': size === 'xl'
    });

    if (label) {
      labelEle = /*#__PURE__*/React.createElement("label", {
        className: "text-input-label"
      }, label, ":");
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "textinput-div"
    }, labelEle, /*#__PURE__*/React.createElement("input", {
      className: inputClass,
      placeholder: placeholder,
      onChange: update,
      id: id
    }));
  }

}

TextField.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  update: PropTypes.func
};
TextField.defaultProps = {
  label: '',
  placeholder: '',
  size: 'md',
  id: '',
  update: () => null
};
export default TextField;