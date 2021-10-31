import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import TextField from '../TextField/TextField';

const StyledIcon = styled(BsSearch)`
    position: absolute;
    transform: translate(0, 40%);
    margin-left: 5px;
`

const StyledTextField = styled(TextField)`
    padding-left: 25px;
`

class SearchBar extends Component {
    render(){
        var me          = this,
            props       = me && me.props;

        return(
            <div className="searchBar">
                <StyledIcon/>
                <StyledTextField {...props} /> 
            </div>
        )
    }
    
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    size: PropTypes.string
}

SearchBar.defaultProps = {
    placeholder: '',
    size: 'sm'
}

export default SearchBar;