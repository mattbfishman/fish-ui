import React from 'react';
import styled from 'styled-components';
import * as Styles from './styles';
import PropTypes from 'prop-types';



const Text = styled.input`
    ${Styles.inputBase};
    ${props => Styles[props.size]};
`

 


export default class TextField extends React.Component {  
    render() {
        var me    = this,
            props = me && me.props,
            size  = props.size;

        return (
            <Text size={size} />
        );
    }
};

TextField.propTypes = {
    // label: PropTypes.string,
    size: PropTypes.string,
    // placeholder: PropTypes.string,
    // id: PropTypes.string,
    // update: PropTypes.func
}

TextField.defaultProps = {
    // label: '',
    // placeholder: '',
    size: 'md',
    // id: '',
    // update: () => null
}
