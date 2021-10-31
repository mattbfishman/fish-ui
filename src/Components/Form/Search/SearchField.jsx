import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchField.scss';
import { BsSearch } from 'react-icons/bs';

var classNames = require('classnames');

class SearchField extends Component {

    empty() {
        return void 0;
    }

    render(){
        var me          = this,
            props       = me && me.props,
            filter      = props && props.filter || me.empty,
            placeholder = props && props.placeholder;

        return(
            <div className="search-container">
                <input onKeyUp={(e) => filter(e)} placeholder={placeholder} className="search-field"/>
                <BsSearch className="search-icon" />
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