import React, { Component } from 'react';
import map from 'lodash/map';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    var me = this,
        props = me && me.props,
        logo = props && props.logo,
        navItems = props && props.navItems,
        navItemsEle = map(navItems, function (navItem, idx) {
      return /*#__PURE__*/React.createElement(Navitem, {
        key: idx,
        path: navItem.path,
        label: navItem.label
      });
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "navbar"
    }, /*#__PURE__*/React.createElement("img", {
      className: "logo",
      src: logo,
      alt: "Nav icon"
    }), /*#__PURE__*/React.createElement("ul", {
      className: "nav-items"
    }, navItemsEle));
  }

}

;
Navbar.propTypes = {
  navItems: PropTypes.array
};
Navbar.defaultProps = {
  navItems: []
};

class Navitem extends Component {
  render() {
    var me = this,
        props = me && me.props,
        label = props && props.label,
        path = props && props.path;
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
      to: path
    }, label));
  }

}

Navitem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string
};
Navitem.defaultProps = {
  label: '',
  path: ''
};
export default Navbar;