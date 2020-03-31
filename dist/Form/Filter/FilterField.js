import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilterField.scss';
import { FilterList } from '@styled-icons/material/FilterList';
import map from 'lodash/map';
import Checkbox from '../../Checkbox/Checkbox';

var classNames = require('classnames');

class FilterField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    var me = this,
        state = me && me.state,
        show = state && state.show;
    this.setState({
      show: !show
    });
  }

  render() {
    var me = this,
        state = me && me.state,
        props = me && me.props,
        toggleHidden = me && me.toggleHidden,
        show = state && state.show,
        checkboxes = props && props.checkboxes,
        filterDisplay = classNames({
      'filter-display': true,
      'hidden': show === false
    }),
        checkboxEle = map(checkboxes, function (checkbox, index) {
      return (
        /*#__PURE__*/
        React.createElement(Checkbox, {
          key: index,
          label: checkbox.label
        })
      );
    });
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "filter-container"
      },
      /*#__PURE__*/
      React.createElement(FilterList, {
        onClick: toggleHidden,
        className: "filter-icon"
      }),
      /*#__PURE__*/
      React.createElement("div", {
        className: filterDisplay
      }, checkboxEle))
    );
  }

}

FilterField.propTypes = {
  checkboxes: PropTypes.array
};
FilterField.defaultProps = {
  checkboxes: []
};
export default FilterField;