import React from 'react';
import styled from 'styled-components';
import * as Styles from './TextFieldStyles';
import PropTypes from 'prop-types';

const Text = styled.input.attrs(props => ({
    type: props.type    
}))`
    ${Styles.inputBase};
    ${props => Styles[props.size]};
`

export default class TextField extends React.Component {  
    render() {
        var me          = this,
            props       = (me && me.props) || {};

        return (
            <Text {...props} />
        );
    }
};

TextField.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    placeholder: PropTypes.string,
    update: PropTypes.func,
    props: PropTypes.string
}

TextField.defaultProps = {
    placeholder: '',
    size: 'md',
    update: () => null,
    type: "text"
}
