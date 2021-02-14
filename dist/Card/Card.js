import React from 'react';
import styled from 'styled-components';
import * as Styles from './CardStyles';
import PropTypes from 'prop-types';
import { themes } from '../../Constants/theme';
const StyledCard = styled.div`
    ${Styles.cardBase};
    border-top: 3px solid ${props => props.border};
`;
const CardImage = styled.img`
    border-radius: 100%;
    width: 100px;
    height: 100px;
`;
const StyledHeader = styled.h2`
    margin: 0 0 0 20px;
`;
const StyledSubHeader = styled.h3`
    margin: 10px 0 0 20px;
    font-weight: 100;
`;
const StyledContent = styled.div`
    display: flex;
    background: ${props => props.background};
    width: 100%;
    height: 150px;
    padding: 0 10px 0 10px;
`;
export default class Card extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        {
      header,
      imgSrc,
      subHeader,
      innerContent
    } = props,
        theme = props && props.theme && themes[props.theme] || themes.default,
        background = theme && theme.background,
        border = theme && theme.border,
        img;

    if (imgSrc) {
      img = /*#__PURE__*/React.createElement(CardImage, {
        src: imgSrc
      });
    }

    return /*#__PURE__*/React.createElement(StyledCard, {
      border: border
    }, /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, img, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement(StyledHeader, null, header), /*#__PURE__*/React.createElement(StyledSubHeader, null, subHeader))), /*#__PURE__*/React.createElement(StyledContent, {
      background: background
    }, /*#__PURE__*/React.createElement("p", null, innerContent)));
  }

}
;
Card.propTypes = {
  header: PropTypes.string,
  imgSrc: PropTypes.string,
  subHeader: PropTypes.string,
  innerContent: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'success', 'danger'])
};
Card.defaultProps = {
  header: '',
  subHeader: '',
  innerContent: '',
  theme: 'default'
};