import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import {Search} from '@styled-icons/material/Search'

var classNames = require('classnames');

class SearchField extends Component {
    render(){
        return(
            <div className="search-container">
                <input placeholder="Search for a price" className="search-field"/>
                <Search className="search-icon" />
            </div>
        )
    }
    
}

// TextField.propTypes = {
//     size: PropTypes.string,
//     placeholder: PropTypes.string
// }

// TextField.defaultProps = {
//     placeholder: '',
//     size: 'md'
// }

export default SearchField;