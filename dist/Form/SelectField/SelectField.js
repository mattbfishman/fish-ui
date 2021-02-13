import React from 'react';
import styled from 'styled-components';
import * as Styles from './SelectFieldStyles';
import map from 'lodash/map';
import PropTypes from 'prop-types';
const StyledSelectField = styled.div`
    ${Styles.selectFieldBase};
    select{
        ${props => Styles[props.size]};
    }
`;
export default class SelectField extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        label = props.label,
        update = props.update,
        size = props.size,
        options = props.options,
        optionsEle = map(options, function (option, index) {
      return /*#__PURE__*/React.createElement("option", {
        key: index,
        value: option.value
      }, option.label);
    });
    return /*#__PURE__*/React.createElement(StyledSelectField, {
      size: size
    }, /*#__PURE__*/React.createElement("label", null, label, ":"), /*#__PURE__*/React.createElement("select", {
      onBlur: update
    }, optionsEle));
  }

}
;
SelectField.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  options: PropTypes.array,
  label: PropTypes.string
};
SelectField.defaultProps = {
  options: [],
  label: '',
  size: 'md',
  update: () => null
};