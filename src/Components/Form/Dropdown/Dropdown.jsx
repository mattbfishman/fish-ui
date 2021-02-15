import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import {themes} from '../../../Constants/theme';

const StyledDropdown = styled.div`
    margin: 20px 0 0 20px;
    width: max-content;
    
    .dropdown-item-wrapper{
        flex-direction: column;
        display: flex;
        align-items: center;
        padding: 0 0 10px 0;
        box-shadow: 0 4px 6px hsl(0deg 0% 0% / 20%);
        margin-top: 10px;
        border-radius: 10px;
        width: fit-content;
        min-width: 100px;
        max-width: 250px
    }

    .caret{
        margin-left: 5px;
    }

    :hover > .title{
        color: ${props => props.active};
        border-left: 5px solid ${props => props.border};
    }
`

const StyledTitle = styled.div`
    width: 100px;
    padding: 10px 10px 10px 10px;
`

const StyledDropdownItem = styled.a`
    text-decoration: none;
    text-transform: capitalize;
    padding: 10px 0 10px 40px;
    margin: 0 20px 0 20px;
    height: 30px;
    width: 100%;
    text-align: left;
    color: #2D3747;
    font-size: 14px;
    display: flex;
    align-items: center;
    :hover{
        color: ${props => props.border};
    }
`

const StyledDropdownTitle = styled.div`
    text-transform: capitalize;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;

    h4{
        margin: 10px 0 10px 20px;
        text-align :left;
        width: 100%;
    }

    > a {
        padding: 5px 0 5px 20px;
        color: #7f7f7f;
        margin: 0;
    }

    a:last-child{
        padding: 10px 0 20px 20px;
    }
`;

export default class Dropdown extends React.Component {  
    constructor(props){
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            hovering: false
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
    toggleHoverState(state) {
        return {
            hovering: !state.hovering
        };
    }

    render() {
        var me             = this,
            props          = (me && me.props) || {},
            state          = (me && me.state) || {},
            {hovering}     = state,
            {title, items} = props,
            theme          = (props && props.theme && themes[props.theme]) || themes.default,
            border         = (theme && theme.border),
            active         = (theme && theme.active),
            dropdownItems  = map(items, function(item, idx){
                let {href, label, title, items} = item;
                if(title){
                    return <DropdownItemTitle title={title} key={idx} border={border} items={items}/>
                } else { 
                    return <DropdownItem href={href} label={label} key={idx} border={border}/>
                }
            }),
            caret;

            if(hovering){
                caret = <span className="caret">&#9660;</span>
            } else {
                caret = <span className="caret">&nabla;</span>
            }
        return (
            <StyledDropdown border={border} active={active} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <StyledTitle className="title" >
                    {title} 
                    {caret}
                </StyledTitle>
                {hovering &&
                    <div className="dropdown-item-wrapper">
                        {dropdownItems}
                    </div>
                }
            </StyledDropdown>
        );
    }
};


Dropdown.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    theme: PropTypes.string
}

Dropdown.defaultProps = {
    title: '',
    items: [],
    theme: 'defaut'
}

function DropdownItem(props){
    var {href, label, border} = props;

    return (
        <StyledDropdownItem border={border} href={href}>{label}</StyledDropdownItem>
    );
}

DropdownItem.defaultProps = {
    label: '',
    href: ''
}

function DropdownItemTitle(props){
    var {title, items, border} = props,
    dropdownItems              = map(items, function(item, idx){
        let {href, label} = item;
        return <DropdownItem href={href} label={label} key={idx} border={border}/>
    });

    return (
        <StyledDropdownTitle>
            <h4>{title}</h4>
            {dropdownItems}
        </StyledDropdownTitle>
    );
}

DropdownItemTitle.defaultProps = {
    title: '',
    icon: ''
}

