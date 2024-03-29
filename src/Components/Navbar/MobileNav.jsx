import React from 'react';
import styled from 'styled-components';
import {find, map} from 'lodash';
import PropTypes from 'prop-types';
import {GiHamburgerMenu} from 'react-icons/gi';
import { BsSearch, BsFillCartFill, BsPersonCircle } from 'react-icons/bs';
import {Link} from "react-router-dom";

const A = 'A';

const StyledNav = styled.nav`
   background: black;
   width: 100vw;
   height: 60px;
   color: white;
   display: flex;
   min-width: 100%;
   flex-direction: column;
`

const StyledHamburger = styled.button`
    width: 40px;
    height: 40px;
    background: black;
    color: white;
    margin: 10px;
    border: none;
`

const StyledIcon = styled(GiHamburgerMenu)`
    height: 30px;
    width: 30px;
    color: ${props => props.show === true ? 'gray' : 'white'};
`

const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
`

const StyledTitle = styled.h1`
    margin: 0 10px;
    width: 100%;
    min-width: 150px;
`

const StyledInnerMenu = styled.div`
    border-top: 1px solid darkgray;
    margin: 0 20px;
`

const StyledInnerMenuContainer = styled.div`
    background: black;
    width: 100%;
    z-index: 99;
`

const StyledNavList = styled.ul`
    margin: 10px 0;
    list-style: none;
    padding: 20px 0 40px;
`

const StyledNavItem = styled.li`
    margin: 10px 0;
    cursor: pointer;
    padding: 10px 0 10px 5px;
`

const StyledIconBar = styled.div`
    width: 100%;
    display: flex;
    margin-right: 20px;
    justify-content: flex-end;
`

const StyledSearch = styled(BsSearch)`
    width: 24px;
    height: 24px;
    padding: 15px;
`

const StyledLogin = styled(BsPersonCircle)`
    width: 24px;
    height: 24px;
    padding: 15px;
`

const StyledCart = styled(BsFillCartFill)`
    width: 24px;
    height: 24px;
    padding: 15px;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`


export default class MobileNav extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.toggleHidden = this.toggleHidden.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }
    
    toggleHidden(){
        var me      = this,
            state   = me && me.state,
            show    = state && state.show;

        me.setState({
            show: !show
        });
    }

    toggleShow(e){
        var me       = this,
            state    = me && me.state,
            show     = state && state.show,
            {target} = e,
            parentElement, nodeName;

        if(target && show) {
            parentElement = target && target.parentElement || {};
            nodeName = parentElement && parentElement.nodeName || {};
            console.log(nodeName);
            if(nodeName === A && show){
                me.setState({
                    show: false
                });
            }
        }
    }

    render() {
        var me           = this,
            props        = (me && me.props) || {},
            state        = (me && me.state) || {},
            toggleHidden = me && me.toggleHidden,
            toggleShow   = me && me.toggleShow,
            show         = state && state.show,
            navItems     = props.navItems,
            brand        = find(navItems, ['type', 'brand']),
            login        = find(navItems, ['type', 'login']),
            cart         = find(navItems, ['type', 'cart']),
            search       = find(navItems, ['type', 'search']),
            text         = brand.text || '',
            navLinks     = map(navItems, function(item, idx){
                if(item && item.type === 'navLink'){
                    let text = item.text || '',
                        src  = item.src || '#';
                    return <StyledLink to={src}><StyledNavItem key={idx}>{text}</StyledNavItem></StyledLink>
                }
            });

        return (
            <StyledNav onClick={(e) => toggleShow(e)}>
                <StyledTitleContainer>
                    <StyledHamburger onClick={toggleHidden}> <StyledIcon show/></StyledHamburger>
                    <StyledLink to={brand.src}><StyledTitle>{text}</StyledTitle></StyledLink>
                    <StyledIconBar>
                        {search && <StyledLink to={search.src}><StyledSearch/></StyledLink> }
                        {login && <StyledLink to={login.src}><StyledLogin/></StyledLink>}
                        {cart && <StyledLink to={cart.src}><StyledCart/></StyledLink>}
                    </StyledIconBar>
                </StyledTitleContainer>
                {show &&
                    <StyledInnerMenuContainer>
                        <StyledInnerMenu>
                            <StyledNavList>
                                {navLinks}
                            </StyledNavList>
                        </StyledInnerMenu>
                    </StyledInnerMenuContainer>
                }
            </StyledNav>
        );
    }
};

MobileNav.propTypes = {
    navItems: PropTypes.array,
    theme: PropTypes.oneOf(['default', 'success', 'danger']),
    bgColor: PropTypes.string,
    txtColor: PropTypes.string
}

MobileNav.defaultProps = {
    navItems : [],
    theme: 'default',
    bgColor: 'fff',
    txtColor: '000'
}
