import React, { Component } from 'react';
import map from 'lodash/map';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    var me = this,
        props = me && me.props,
        logo = props && props.logo,
        navItems = props && props.navItems,
        navItemsEle = map(navItems, function (navItem) {
      return (
        /*#__PURE__*/
        React.createElement(Navitem, {
          link: navItem
        })
      );
    });
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "navbar"
      },
      /*#__PURE__*/
      React.createElement("img", {
        className: "logo",
        src: logo,
        alt: "Nav icon"
      }),
      /*#__PURE__*/
      React.createElement("ul", {
        className: "nav-items"
      }, navItemsEle))
    );
  }

}

;

class Navitem extends Component {
  render() {
    var me = this,
        props = me && me.props,
        link = props && props.link;
    return (
      /*#__PURE__*/
      React.createElement("li", null, link)
    );
  }

}

export default Navbar;