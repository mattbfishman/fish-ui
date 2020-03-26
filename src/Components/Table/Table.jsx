import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './Table.scss';

var classNames = require('classnames');

class Table extends Component {
    render(){
        var me        = this,
            props     = me && me.props,
            rows      = props && props.rows,
            createRow = this.createTableRows;
        
        return(
            <table>
                <tbody>
                {map(rows, function(value, index) {
                    return createRow(value, index);
                })}
                </tbody>
            </table>
        )
    }

    createTableRows(rowData, rowKey){
        return (
          <tr key={rowKey}>
                {rowData.map((key, index) => {
                    return <td key={index}>{key}</td>
                })}
          </tr>  
        );
    }
}

Table.propTypes = {
    rows: PropTypes.array
}

Table.defaultProps = {
    rows: []
}

export default Table;