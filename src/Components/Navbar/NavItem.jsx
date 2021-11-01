import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchBar from '../Form/Search/SearchBar';
import {Link} from "react-router-dom";
import Social from '../Social/Social';
import {types} from '../../Constants/navTypes';
import * as Styles from './NavStyles';
import { BsFillCartFill} from 'react-icons/bs';

const BRAND = types.BRAND,
      NAVLINK = types.NAVLINK,
      LOGIN = types.LOGIN,
      SEARCH = types.SEARCH,
      SOCIAL = types.SOCIAL,
      CART = types.CART,
      SM = 'sm';
  
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
  
  const StyledBrand = styled(Link)`
      font-size: 24px;
      font-weight: 600;
      margin-left: 40px;
      ${Styles.NavItemBase};
      color: gray;
      &:hover{
          color: gray;
      }
  `

  const StyledCart = styled(Link)`
    color: ${props => props.txtColor};
    padding-right: 40px;
    &:hover{
        color: white;
    }
  `


export default class NavItem extends Component{
    render(){
        var me          = this,
            props       = (me && me.props) || {},
            text        = props.text,
            type        = props.type,
            txtColor    = props.txtColor,
            retEle, src, active, items;

            if(type === BRAND) {
                src = props.src;
                retEle = <StyledBrand to={src}>{text}</StyledBrand>;
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
            } else if(type === CART){
                src = props.src;
                retEle = <StyledCart to={src} txtColor={txtColor}><BsFillCartFill/></StyledCart>;
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


