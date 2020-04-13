import React, {Component} from 'react';
import map from 'lodash/map';
import './Navbar.scss';

class Navbar extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            logo        = props && props.logo,
            navItems    = props && props.navItems,
            navItemsEle = map(navItems, function(navItem){
                return <Navitem link={navItem}/>;
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

class Navitem extends Component{
    render(){
        var me          = this,
            props       = me && me.props,
            link        = props && props.link;

        return(
            <li>{link}</li>
        );
    }
}

export default Navbar;
