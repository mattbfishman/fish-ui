import React, {Component} from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import * as Styles from './NavStyles';
import {Link, BrowserRouter as Router} from "react-router-dom";
import PropTypes from 'prop-types';
import SearchBar from '../Form/Search/SearchBar';
import Social from '../Social/Social';
import {types} from '../../Constants/navTypes';
const BRAND = types.BRAND,
      NAVLINK = types.NAVLINK,
      LOGIN = types.LOGIN,
      SEARCH = types.SEARCH,
      SOCIAL = types.SOCIAL,
      SM = 'sm',
      ALIGN = 'align';

const StyledNav = styled.nav`
    ${Styles.navBase};
    background: ${props => props.bgColor};
    color: ${props => props.txtColor};
`

const StyledNavWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`

const StyledNavGroup = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: ${props => props.align};
    height: 100%;
    align-items: center;
    flex: 1 1 0px;
`

const StyledLink = styled(Link)`
    color: ${(props) => props.active ? 'white' : 'inherit' };
    background-color : ${(props) => props.active ? 'red' : 'inherit' };
    &:hover {
        background: red;
    }
    ${Styles.NavItemBase};
    &:last-of-type{
        margin-right:10px;
    }
`

const StyleLogin = styled.div`
    color: inherit;
    ${Styles.NavItemBase};
`

const StyledBrand = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-left: 40px;

`

export default class Navbar extends React.Component {  
    render() {
        var me      = this,
            props   = (me && me.props) || {},
            bgColor = props.bgColor,
            txtColor = props.txtColor,
            navItems = props.navItems,
            groupedNavItems = groupBy(navItems, ALIGN),
            navGroups = map(groupedNavItems, function(group, key){
                return <NavGroup key={key} group={group} align={key} />;
            });

        return (
            <Router>
                <StyledNav bgColor={bgColor} txtColor={txtColor}>
                    <StyledNavWrapper>
                        {navGroups}
                    </StyledNavWrapper>
                </StyledNav>
            </Router>
        );
    }
};

class NavItem extends Component{
    render(){
        var me          = this,
            props       = (me && me.props) || {},
            text        = props.text,
            type        = props.type,
            retEle, src, active, items;

            if(type === BRAND) {
                retEle = <StyledBrand>{text}</StyledBrand>;
            } else if(type === NAVLINK){
                src = props.src;
                active = !!props.active;
                retEle = (
                    <StyledLink to={src} active={active}>{text}</StyledLink> 
                )
            } else if(type === LOGIN){
                retEle = <StyleLogin>{text}</StyleLogin>;
            } else if(type === SEARCH){
                retEle = <SearchBar placeholder={text} size={SM}/>;
            } else if(type === SOCIAL){
                items = props.items;
                retEle = <Social socialList={items} />;
            } else {
                retEle = null;
            }

        
        return retEle;
    }
}

NavItem.propTypes = {
    text: PropTypes.string,
    type : PropTypes.string,
    align : PropTypes.string
}

NavItem.defaultProps = {
    text: '',
    type : '',
    align: 'left'
}

class NavGroup extends Component{
    render(){
        var me = this,
            props = (me && me.props) || {},
            group = props.group,
            align = props.align,
            items = map(group, function(navItem, idx){
                return <NavItem key={idx} {...navItem}/>
            });

        return (
            <StyledNavGroup align={align}>
                {items}
            </StyledNavGroup>
        )
    }
}

NavGroup.propTypes = {
    group: PropTypes.array
}

NavGroup.defaultProps = {
    group: []
}

Navbar.propTypes = {
    navItems: PropTypes.array,
    theme: PropTypes.oneOf(['default', 'success', 'danger']),
    bgColor: PropTypes.string,
    txtColor: PropTypes.string
}

Navbar.defaultProps = {
    navItems : [],
    theme: 'default',
    bgColor: 'fff',
    txtColor: '000'
}
