import React, { Component } from 'react';
import Button from './../../Button/Button';
import TextField from './../TextField/TextField';
import SelectField from './../SelectField/SelectField';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './AddForm.scss';

class AddForm extends Component {
  render() {
    var me = this,
        props = me && me.props,
        header = props && props.header,
        fields = props && props.fields,
        fieldEles = map(fields, function (field, index) {
      let type = field.type,
          label = field.label,
          size = field.size;

      if (type === "select") {
        return (
          /*#__PURE__*/
          React.createElement(SelectField, {
            key: index,
            label: label,
            size: size,
            options: field.options
          })
        );
      } else if (type === "text") {
        return (
          /*#__PURE__*/
          React.createElement(TextField, {
            key: index,
            label: label,
            size: size
          })
        );
      } else if (type === "button") {
        return (
          /*#__PURE__*/
          React.createElement(Button, {
            key: index,
            size: size,
            label: label
          })
        );
      }
    });
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "add-form"
      },
      /*#__PURE__*/
      React.createElement("div", {
        className: "add-form-wrapper"
      },
      /*#__PURE__*/
      React.createElement("h1", null, header), fieldEles))
    );
  }

}

;
AddForm.propTypes = {
  header: PropTypes.string,
  fields: PropTypes.array
};
AddForm.defaultProps = {
  header: '',
  fields: []
};
export default AddForm;