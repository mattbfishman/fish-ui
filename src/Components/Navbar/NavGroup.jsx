import React, {Component} from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const StyledNavGroup = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: ${props => props.align};
    height: 100%;
    align-items: center;
    flex: 1 1 0px;
`

export default class NavGroup extends Component{
    render(){
        var me       = this,
            props    = (me && me.props) || {},
            group    = props.group,
            align    = props.align,
            txtColor = props.txtColor,
            items    = map(group, function(navItem, idx){
                return <NavItem key={idx} {...navItem} txtColor={txtColor}/>
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