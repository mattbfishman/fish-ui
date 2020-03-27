import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './Table.scss';

var classNames = require('classnames');

class Table extends Component {
  render() {
    var me = this,
        props = me && me.props,
        rows = props && props.rows,
        createRow = this.createTableRows;
    return (
      /*#__PURE__*/
      React.createElement("table", null,
      /*#__PURE__*/
      React.createElement("tbody", null, map(rows, function (value, index) {
        return createRow(value, index);
      })))
    );
  }

  createTableRows(rowData, rowKey) {
    return (
      /*#__PURE__*/
      React.createElement("tr", {
        key: rowKey
      }, rowData.map((key, index) => {
        return (
          /*#__PURE__*/
          React.createElement("td", {
            key: index
          }, key)
        );
      }))
    );
  }

}

Table.propTypes = {
  rows: PropTypes.array
};
Table.defaultProps = {
  rows: []
};
export default Table;