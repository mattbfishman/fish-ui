import React from 'react';
import styled from 'styled-components';
import * as Styles from './SelectFieldStyles';
import map from 'lodash/map';
import PropTypes from 'prop-types';

const StyledSelectField = styled.div`
    ${Styles.selectFieldBase};
    select{
        ${props => Styles[props.size]};
    }
`

export default class SelectField extends React.Component {  
    render() {
        var me          = this,
            props       = (me && me.props) || {},
            label       = props.label,
            update      = props.update,
            size        = props.size,
            options     = props.options,
            className   = props.className,
            onChange    = props.onChange,
            optionsEle  = map(options, function(option, index){
                return <option key={index} value={option.value}>{option.label}</option>;
            });

        return (
            <StyledSelectField size={size} className={className}>
                <label>{label}:</label>
                <select onBlur={update} onChange={onChange}>
                    {optionsEle}
                </select>
            </StyledSelectField>
        );
    }
};

SelectField.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    options: PropTypes.array,
    label  : PropTypes.string,
    onChange: PropTypes.func
}

SelectField.defaultProps = {
    options: [],
    label: '',
    size: 'md',
    update: () => null,
    onChange: () => null
}