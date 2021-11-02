import React, {Component} from 'react';
import styled from 'styled-components';
import * as Styles from './BannerStyles';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const StyledBanner = styled.div`
    height: 300px;
    width: 100%;
    background: ${props => props.bgColor};
`

const StyledTitle = styled.h2`
    font-size: 72px;
    padding-top: 50px;
    font-weight: bold;
    ${Styles.headerStyles};
    color: ${props => props.titleColor};
`;

const StyledSubTitle = styled.h3`
    font-size:24px;
    ${Styles.headerStyles};
    color: ${props => props.subTitleColor};
    padding-top: 10px;
`

const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px auto;
`

class Banner extends Component {
    render(){
        var me          = this,
            props       = (me && me.props) || {},
            {title, subTitle, titleColor, bgColor, subTitleColor, button} = props;

        return (
            <StyledBanner bgColor={bgColor}>
                <StyledTitle titleColor={titleColor}>{title}</StyledTitle>
                <StyledSubTitle subTitleColor={subTitleColor}>{subTitle}</StyledSubTitle>
                <StyledButton {...button} />
            </StyledBanner>
        );
    }
    
}

Banner.propTypes = {
    bgColor: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    titleColor: PropTypes.string,
    subTitleColor: PropTypes.string,
    button: PropTypes.object
}

Banner.defaultProps = {
    bgColor: 'gray',
    title: '',
    subTitle: '',
    titleColor: 'black',
    subTitleColor: '#4a4a4a',
    button: {}
}

export default Banner;