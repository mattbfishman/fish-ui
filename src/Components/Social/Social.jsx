import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import styled from 'styled-components';
import {types} from '../../Constants/socialTypes';
import { BsFillEnvelopeFill, BsFacebook, BsInstagram, BsGithub, BsTwitch, BsReddit, BsGoogle, BsTwitter} from 'react-icons/bs';
const FACEBOOK    = types.FACEBOOK,
      INSTAGRAM   = types.INSTAGRAM,
      GOOGLE_PLUS = types.GOGGLE_PLUS,
      EMAIL       = types.EMAIL,
      GITHUB      = types.GITHUB,
      TWITCH      = types.TWITCH,
      TWITTER     = types.TWITTER,
      REDDIT      = types.REDDIT;

const StyledSocialWrapper = styled.div`
    display: flex;
    gap: 5px;
    padding-left:20px;
`

const StyledSocialLink = styled.a`
    height: 28px;
    width: 28px;
    border: 1px solid gray;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 18px;
        color: gray;
        &:hover{
            color: red;
        }
    }
`


class Social extends Component {
    checkType(type){
        if(type === FACEBOOK) {
            return <BsFacebook/>;
        } else if(type === INSTAGRAM) {
            return <BsInstagram/>;
        } else if(type === GOOGLE_PLUS) {
            return <BsGoogle/>;
        } else if(type === EMAIL) {
            return <BsFillEnvelopeFill/>;
        } else if(type === GITHUB) {
            return <BsGithub/>
        } else if(type === TWITCH) {
            return <BsTwitch/>;
        } else if(type === TWITTER) {
            return <BsTwitter/>;
        } else if(type === REDDIT) {
            return <BsReddit/>;
        } 
        return null;
    }
    render(){
        var me          = this,
            props       = (me && me.props) || {},
            socialList  = props.socialList,
            socialEle   = map(socialList, function(social){
                let src           = social.src,
                    type          = social.type,
                    socialElement = me.checkType(type);
                return <StyledSocialLink href={src}>{socialElement}</StyledSocialLink>
            });

        return(
            <StyledSocialWrapper className="socialIcons"> 
                {socialEle}
            </StyledSocialWrapper>
        )
    }  
}

Social.propTypes = {
    socialList: PropTypes.array
}

Social.defaultProps = {
    socialList: []
}

export default Social;