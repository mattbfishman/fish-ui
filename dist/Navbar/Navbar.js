import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import * as Styles from './NavStyles';
import PropTypes from 'prop-types';
import NavGroup from './NavGroup';
const ALIGN = 'align';
const StyledNav = styled.nav`
    ${Styles.navBase};
    background: ${props => props.bgColor};
    color: ${props => props.txtColor};
`;
const StyledNavWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;
export default class Navbar extends React.Component {
  render() {
    var me = this,
        props = me && me.props || {},
        bgColor = props.bgColor,
        txtColor = props.txtColor,
        navItems = props.navItems,
        groupedNavItems = groupBy(navItems, ALIGN),
        navGroups = map(groupedNavItems, function (group, key) {
      return /*#__PURE__*/React.createElement(NavGroup, {
        key: key,
        group: group,
        align: key,
        txtColor: txtColor
      });
    });
    return /*#__PURE__*/React.createElement(StyledNav, {
      bgColor: bgColor,
      txtColor: txtColor
    }, /*#__PURE__*/React.createElement(StyledNavWrapper, null, navGroups));
  }

}
;
Navbar.propTypes = {
  navItems: PropTypes.array,
  theme: PropTypes.oneOf(['default', 'success', 'danger']),
  bgColor: PropTypes.string,
  txtColor: PropTypes.string
};
Navbar.defaultProps = {
  navItems: [],
  theme: 'default',
  bgColor: 'fff',
  txtColor: '000'
};