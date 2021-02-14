import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 300px;
    flex-wrap: wrap;
    background: black;
    color: #f8f8f8;
    position: absolute;
    bottom: 0;

    .info-wrapper{
        width: 100%;
        display: flex;
        padding: 30px 50px 20px 50px;
        overflow: hidden;
    }
`

const StyledInfo = styled.div`
    width: 20%;
    h1{
        margin: 0 0 20px 0;
    }
    p{
        color: #bdbdbd;
    }
`

const StyledCopyright = styled.div`
    flex: 1 0 100%;

    h5{
        padding-left: 50px;
    }
`

const StyledColumn = styled.div`
    text-transform : capitalize;
    display: flex;
    flex-direction: column;
    padding: 0 50px 0 50px;
    h2{
        margin: 0 0 15px 0;
    }
`

const StyledColumnWrapper = styled.div`
    width: 80%;
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
`

const StyledFooterLink = styled.a`
    text-transform : capitalize;
    text-decoration: none;
    color: #898989;
    margin: 0 0 10px 0;
`

export default class Footer extends React.Component {  
    render() {
        var me = this,
            props = (me && me.props) || {},
            {title, columns, copyright, quote} = props,
            columnEles = map(columns, function(links, key){
                return <FooterColumn links={links} title={key} key={key}/>
            });

        return (
            <StyledFooter>
                <div className="info-wrapper">
                    <StyledInfo>
                        <h1>{title}</h1>
                        <p>{quote}</p>
                    </StyledInfo>
                    <StyledColumnWrapper>
                        {columnEles}
                    </StyledColumnWrapper>
                </div>
                <StyledCopyright>
                    <h5>{copyright}</h5>
                </StyledCopyright>
            </StyledFooter>
        );
    }
};


Footer.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.object,
    copyright: PropTypes.string,
    quote: PropTypes.string
}

Footer.defaultProps = {
    title: '',
    quote: '',
    copyright: '',
    columns: {}
}


function FooterColumn(props){
    var {title, links} = props,
    linkEles = map(links, function(link, idx){
        let {href, label} = link;
        return <FooterLink href={href} label={label} key={label}/>
    });
    
    return (
        <StyledColumn>
            <h2>{title}</h2>
            {linkEles}
        </StyledColumn>
    );
}

FooterColumn.defaultProps = {
    title: '',
    links: []
}

function FooterLink(props){
    var {label, href} = props;
    return <StyledFooterLink href={href}>{label}</StyledFooterLink>;
}

FooterLink.defaultProps = {
    label: '',
    href: ''
}
