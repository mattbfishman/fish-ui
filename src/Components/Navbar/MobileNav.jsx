import React from 'react';
import styled from 'styled-components';
import {find} from 'lodash';
import PropTypes from 'prop-types';
import {GiHamburgerMenu} from 'react-icons/gi';

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
    color: ${props => props.show == true ? 'gray' : 'white'};
`

const StyledTitleContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
`

const StyledTitle = styled.h1`
    margin: 0 10px;
`

const StyledInnerMenu = styled.div`
    border-top: 1px solid darkgray;
    margin: 0 20px;
`

const StyledInnerMenuContainer = styled.div`
    background: black;
    width: 100%;
`

const StyledNavList = styled.ul`
    margin: 10px 0;
    list-style: none;
    padding: 20px 0 40px;
`

const StyledNavItem = styled.li`
    margin: 10px 0;
`

export default class MobileNav extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.toggleHidden = this.toggleHidden.bind(this);
    }
    
    toggleHidden(){
        var me      = this,
            state   = me && me.state,
            show    = state && state.show;

        this.setState({
            show: !show
        });
    }

    render() {
        var me           = this,
            props        = (me && me.props) || {},
            state        = (me && me.state) || {},
            toggleHidden = me && me.toggleHidden,
            show         = state && state.show,
            navItems     = props.navItems,
            brand        = find(navItems, ['type', 'brand']) || {},
            text         = brand.text || '';

        return (
            <StyledNav>
                <StyledTitleContainer>
                    <StyledHamburger onClick={toggleHidden}> <StyledIcon show={show} /> </StyledHamburger>
                    <StyledTitle>{text}</StyledTitle>
                </StyledTitleContainer>
                {show &&
                    <StyledInnerMenuContainer>
                        <StyledInnerMenu>
                            <StyledNavList>
                                <StyledNavItem>test</StyledNavItem>
                                <StyledNavItem>test</StyledNavItem>
                                <StyledNavItem>test</StyledNavItem>
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
