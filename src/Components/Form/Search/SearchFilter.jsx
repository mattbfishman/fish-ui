import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchFilter.scss';
import { BsSearch } from 'react-icons/bs';

class SearchFilter extends Component {

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

SearchFilter.propTypes = {
    placeholder: PropTypes.string
}

SearchFilter.defaultProps = {
    placeholder: ''
}

export default SearchFilter;