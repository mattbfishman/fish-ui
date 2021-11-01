import React, {Component} from 'react';
import PropTypes from 'prop-types';

const LAZY  = 'lazy',
      EAGER = 'eager';


class Hero extends Component {
    render(){
        var me          = this,
            props       = (me && me.props) || {},
            src         = props.src,
            alt         = props.alt,
            height      = props.height,
            width       = props.width,
            loading     = props.lazy ? LAZY : EAGER;

        return <img src={src} alt={alt} width={width} height={height} loading={loading}/>
    }
    
}

Hero.propTypes = {
    src: PropTypes.string,
    lazy: PropTypes.bool,
    alt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
}

Hero.defaultProps = {
    src: '',
    lazy: false,
    alt: '',
    width: 0,
    height: 0
}

export default Hero;