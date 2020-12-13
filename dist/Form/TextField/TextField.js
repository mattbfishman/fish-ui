import React from 'react';
import styled from 'styled-components';
import * as Styles from './TextFieldStyles';
import PropTypes from 'prop-types';
const Text = styled.input`
    ${Styles.inputBase};
    ${props => Styles[props.size]};
`;
export default class TextField extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        size = props.size,
        placeholder = props.placeholder,
        update = props.update;
    return /*#__PURE__*/React.createElement(Text, {
      placeholder: placeholder,
      size: size,
      onChange: update
    });
  }

}
;
TextField.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  placeholder: PropTypes.string,
  update: PropTypes.func
};
TextField.defaultProps = {
  placeholder: '',
  size: 'md',
  update: () => null
};