import React, {Component} from 'react';
import Button from './../../Button/Button';
import TextField from './../TextField/TextField';
import SelectField from './../SelectField/SelectField';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import head from 'lodash/head';
import './AddForm.scss';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.updateForm = this.updateForm.bind(this);
        this.initDefaultStates = this.initDefaultStates.bind(this);
        this.state = {
            form: {}
        }
    }

    updateForm(e){
        var me     = this,
            target = e.target,
            state  = me.state,
            form   = state && {...state.form},
            val, key;
        if(target){
            val = target.value;
            key = target.id;
            form[key] = val;
            this.setState({
                form: form
            });
        }
    }

    initDefaultStates(){
        var me = this,
            props = me.props,
            fields = props.fields,
            defaultForm = {};
        for(var i = 0; i < fields.length; i++){
            let field = fields[i],
                type, id;
            if(field){ 
                type = field.type;
                id   = field.id;
                if(type === "text"){
                    defaultForm[id] = "";
                }
                else if(type === "select"){
                    let options = field.options || [],
                        option = head(options),
                        val;
                    if(option){
                        val = option.value || '';
                        defaultForm[id] = val; 
                    }
                }
            }
        }
        this.setState({
            form: defaultForm
        });
    }

    componentDidMount(){
        var me = this;
        me.initDefaultStates();
    }

    render(){
        var me         = this,
            props      = me && me.props,
            updateForm = me.updateForm,
            header     = props && props.header,
            fields     = props && props.fields,
            submit     = props && props.submit,
            fieldEles = map(fields, function(field, index){
                let type  = field.type,
                    label = field.label,
                    size  = field.size,
                    id    = field.id;
                if(type ==="select"){
                    return <SelectField key={index} label={label} size={size} options={field.options} update={updateForm} id={id}/>;
                } else if(type === "text"){
                    return <TextField key={index} label={label} size={size} update={updateForm} id={id}/>;
                } else if(type === "button"){
                    return <Button key={index} size={size} label={label} type="submit" value="submit"/>;
                }
            });

        return(
            <form onSubmit={submit}>
                <div className="add-form">
                    <div className="add-form-wrapper" id="addForm">
                        <h1>{header}</h1>
                        {fieldEles}
                    </div>
                </div>
            </form>
        );
    }
};


AddForm.propTypes = {
    header: PropTypes.string,
    fields: PropTypes.array,
    submit: PropTypes.func
}

AddForm.defaultProps = {
    header  : '',
    fields: [],
    submit: () => null
}

export default AddForm;