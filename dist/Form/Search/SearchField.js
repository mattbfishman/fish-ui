import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import { Search } from '@styled-icons/material/Search';

var classNames = require('classnames');

class SearchField extends Component {
  render() {
    var me = this,
        props = me && me.props,
        filter = props && props.filter,
        placeholder = props && props.placeholder;
    console.log(filter);
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "search-container"
      },
      /*#__PURE__*/
      React.createElement("input", {
        onKeyPress: e => filter(e),
        placeholder: placeholder,
        className: "search-field"
      }),
      /*#__PURE__*/
      React.createElement(Search, {
        className: "search-icon"
      }))
    );
  }

}

SearchField.propTypes = {
  placeholder: PropTypes.string
};
SearchField.defaultProps = {
  placeholder: ''
};
export default SearchField;