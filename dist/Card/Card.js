import React, { Component } from 'react';
import PropTypes from 'prop-types'; // import map from 'lodash/map';

import './Card.scss';

var classNames = require('classnames');

class Card extends Component {
  render() {
    var me = this,
        props = me && me.props,
        title = props && props.title,
        typeLogo = props && props.typeLogo,
        type = props && props.type,
        price = props && props.price;
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "card-container " + type
      },
      /*#__PURE__*/
      React.createElement("h1", {
        className: "card-title"
      }, title),
      /*#__PURE__*/
      React.createElement("div", {
        className: "card-type"
      }, typeLogo),
      /*#__PURE__*/
      React.createElement("h2", null, price))
    );
  }

}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string
};
Card.defaultProps = {
  title: '',
  price: 'N/A',
  type: ''
};
export default Card;