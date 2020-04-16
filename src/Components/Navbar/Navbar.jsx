import React, {Component} from 'react';
import map from 'lodash/map';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './Navbar.scss';

class Navbar extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            logo        = props && props.logo,
            navItems    = props && props.navItems,
            navItemsEle = map(navItems, function(navItem, idx){
                return <Navitem key={idx} path={navItem.path} label={navItem.label}/>;
            });
 
        return(
            <div className="navbar">
                <img className="logo" src={logo} alt="Nav icon" />
                <ul className="nav-items">
                    {navItemsEle}
                </ul>
            </div>
        );
    }
};

Navbar.propTypes = {
    navItems: PropTypes.array,
}

Navbar.defaultProps = {
    navItems: []
}

class Navitem extends Component{
    render(){
        var me          = this,
            props       = me && me.props,
            label       = props && props.label,
            path        = props && props.path;
        
        return(
            <li>
                <Link to={path}>{label}</Link> 
            </li>
        );
    }
}

Navitem.propTypes = {
    label: PropTypes.string,
    path : PropTypes.string
}

Navitem.defaultProps = {
    label: '',
    path : ''
}


export default Navbar;
