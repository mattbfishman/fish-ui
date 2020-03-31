import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import {Search} from '@styled-icons/material/Search'

var classNames = require('classnames');

class SearchField extends Component {
    render(){
        var me          = this,
            props       = me && me.props,
            filter      = props && props.filter,
            placeholder = props && props.placeholder;

        return(
            <div className="search-container">
                <input onKeyUp={(e) => filter(e)} placeholder={placeholder} className="search-field"/>
                <Search className="search-icon" />
            </div>
        )
    }
    
}

SearchField.propTypes = {
    placeholder: PropTypes.string
}

SearchField.defaultProps = {
    placeholder: ''
}

export default SearchField;