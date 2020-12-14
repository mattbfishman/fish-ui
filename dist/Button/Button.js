import React from 'react';
import styled from 'styled-components';
import * as Styles from './ButtonStyles';
import PropTypes from 'prop-types';
const StyledButton = styled.button`
    ${Styles.buttonBase};
    ${props => Styles[props.size]};
    background: linear-gradient(to left, white 50%, ${props => props.color} 50%) right;
    border-color: ${props => props.color === 'white' ? 'lightgray' : props.color};
    background-size: 200%;
    transition: .5s ease-out;
`;
export default class Button extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        label = props.label;
    return /*#__PURE__*/React.createElement(StyledButton, props, label);
  }

}
;
Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  onClick: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'error', 'danger']),
  color: PropTypes.string
};
Button.defaultProps = {
  size: 'md',
  onClick: () => null,
  variant: 'default',
  color: 'white'
};