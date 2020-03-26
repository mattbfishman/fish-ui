import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import { Search } from '@styled-icons/material/Search';

var classNames = require('classnames');

class SearchField extends Component {
  render() {
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "search-container"
      },
      /*#__PURE__*/
      React.createElement("input", {
        placeholder: "Search for a price",
        className: "search-field"
      }),
      /*#__PURE__*/
      React.createElement(Search, {
        className: "search-icon"
      }))
    );
  }

} // TextField.propTypes = {
//     size: PropTypes.string,
//     placeholder: PropTypes.string
// }
// TextField.defaultProps = {
//     placeholder: '',
//     size: 'md'
// }


export default SearchField;