import React from 'react';
import styled from 'styled-components';
import * as Styles from './ButtonStyles';
import PropTypes from 'prop-types';
const StyledButton = styled.button`
    ${Styles.buttonBase};
    ${props => Styles[props.size]};
    border-color: ${props => props.borderColor === 'white' ? 'lightgray' : props.color};
    color: ${props => props.txtColor ? props.txtColor : 'black'};
    ${({
  height
}) => height && `
        height: ${height}px;
    `}
    ${({
  width
}) => width && `
        width: ${width}px;
    `}
    ${({
  borderWidth
}) => borderWidth && `
        border-width: ${borderWidth}px;
    `}
`;
export default class Button extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        label = props.label;
    console.log(props.animations);
    return /*#__PURE__*/React.createElement(StyledButton, props, label);
  }

}
;
Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  onClick: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'error', 'danger']),
  borderColor: PropTypes.string,
  txtColor: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  borderWidth: PropTypes.number
};
Button.defaultProps = {
  size: 'md',
  onClick: () => null,
  variant: 'default',
  borderColor: 'white',
  borderWidth: 1
};