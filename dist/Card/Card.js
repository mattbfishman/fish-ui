import React from 'react';
import styled from 'styled-components';
import * as Styles from './CardStyles';
import PropTypes from 'prop-types';
const StyledCard = styled.div`
    ${Styles.cardBase};
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
export default class Card extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        header = props && props.header,
        imgSrc = props && props.imgSrc,
        subHeader = props && props.subHeader,
        innerContent = props && props.innerContent,
        img;

    if (imgSrc) {
      img = /*#__PURE__*/React.createElement(CardImage, {
        src: imgSrc
      });
    }

    return /*#__PURE__*/React.createElement(StyledCard, null, /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, img, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement(StyledHeader, null, header), /*#__PURE__*/React.createElement(StyledSubHeader, null, subHeader))), /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, /*#__PURE__*/React.createElement("p", null, innerContent)));
  }

}
;
Card.propTypes = {
  header: PropTypes.string,
  imgSrc: PropTypes.string,
  subHeader: PropTypes.string,
  innerContent: PropTypes.string
};
Card.defaultProps = {
  header: '',
  subHeader: '',
  innerContent: ''
};