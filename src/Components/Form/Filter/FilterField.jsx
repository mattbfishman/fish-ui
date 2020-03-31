import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FilterField.scss';
import {FilterList} from '@styled-icons/material/FilterList';
import map from 'lodash/map';
import Checkbox from '../../Checkbox/Checkbox';

var classNames = require('classnames');

class FilterField extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.toggleHidden = this.toggleHidden.bind(this);
    }
    
    toggleHidden(){
        var me      = this,
            state   = me && me.state,
            show    = state && state.show;

        this.setState({
            show: !show
        });
    }

    render(){
        var me            = this,
            state         = me && me.state,
            props         = me && me.props,
            toggleHidden  = me && me.toggleHidden,
            show          = state && state.show,
            checkboxes    = props && props.checkboxes,
            changeFilter  = props && props.changeFilter,
            filterDisplay = classNames({
                'filter-display'    : true,
                'hidden'            : show === false
            }),
            checkboxEle   = map(checkboxes, function(checkbox, index){
                return <Checkbox key={index} name={checkbox.name} label={checkbox.label}/>
            });

        return(
            <div className="filter-container">
                <FilterList onClick={toggleHidden} className="filter-icon"/>
                <div className={filterDisplay} onChange={(e) => {changeFilter(e)}}>
                    {checkboxEle}
                </div>
            </div>
        )
    }
    
}

FilterField.propTypes = {
    checkboxes: PropTypes.array,
    changeFilter: PropTypes.func.isRequired
}

FilterField.defaultProps = {
    checkboxes: []
}

export default FilterField;