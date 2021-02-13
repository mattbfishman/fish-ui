import React from 'react';
import styled from 'styled-components';
import * as Styles from './CardStyles';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
    ${Styles.cardBase};
`

const CardImage = styled.img`
    border-radius: 100%;
    width: 100px;
    height: 100px;
`

const StyledHeader = styled.h2`
    margin: 0 0 0 20px;
`

const StyledSubHeader = styled.h3`
    margin: 10px 0 0 20px;
    font-weight: 100;
`

export default class Card extends React.Component {  
    render() {
        var me           = this,
            props        = (me && me.props) || {},
            header       = (props && props.header),
            imgSrc       = (props && props.imgSrc),
            subHeader    = (props && props.subHeader),
            innerContent = (props && props.innerContent),
            img;

        if(imgSrc){
            img = <CardImage src={imgSrc}></CardImage>;
        }

        return (
            <StyledCard>
                <div className="title">
                    {img}
                    <div className="header">
                        <StyledHeader>{header}</StyledHeader>
                        <StyledSubHeader>{subHeader}</StyledSubHeader>
                    </div>
                </div>
                <div className="content">
                    <p>{innerContent}</p>
                </div>
            </StyledCard>
        );
    }
};

Card.propTypes = {
    header: PropTypes.string,
    imgSrc: PropTypes.string,
    subHeader: PropTypes.string,
    innerContent: PropTypes.string
}

Card.defaultProps = {
    header: '',
    subHeader: '',
    innerContent: ''
}
