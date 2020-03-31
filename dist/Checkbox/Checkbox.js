import React, { Component } from 'react';
import './Checkbox.scss';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    var me = this,
        props = me && me.props,
        label = props && props.label;
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "checkbox-container"
      },
      /*#__PURE__*/
      React.createElement("input", {
        type: "checkbox"
      }),
      /*#__PURE__*/
      React.createElement("label", null, label))
    );
  }

}

Checkbox.propTypes = {
  label: PropTypes.string
};
Checkbox.defaultProps = {
  label: ''
};
export default Checkbox;