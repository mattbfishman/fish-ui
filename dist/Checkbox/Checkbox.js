import React, { Component } from 'react';
import './Checkbox.scss';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    var me = this,
        props = me && me.props,
        label = props && props.label,
        name = props && props.name;
    return /*#__PURE__*/React.createElement("div", {
      className: "checkbox-container"
    }, /*#__PURE__*/React.createElement("input", {
      name: name,
      type: "checkbox"
    }), /*#__PURE__*/React.createElement("label", null, label));
  }

}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
};
Checkbox.defaultProps = {
  label: '',
  name: ''
};
export default Checkbox;