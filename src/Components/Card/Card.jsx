import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import map from 'lodash/map';
import './Card.scss';

var classNames = require('classnames');

class Card extends Component {
    render(){
        var me        = this,
            props     = me && me.props,
            title     = props && props.title,
            typeLogo  = props && props.typeLogo,
            type      = props && props.type,
            price     = props && props.price;        
        return(
            <div className={"card-container " + type}>
                <h1 className="card-title">{title}</h1>
                <div className={"card-type"}>
                    {typeLogo}
                </div>
                <h2>{price}</h2>
            </div>
        )
    }

}

Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string
}

Card.defaultProps = {
    title: '',
    price: 'N/A',
    type:''
}

export default Card;