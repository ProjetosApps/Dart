import React from 'react';
import { View, TextInput, ActivityIndicator, Text, Alert } from 'react-native';

import * as yup from 'yup';
import { withFormik } from 'formik';

import { Actions } from 'react-native-router-flux';

import { Button, Icon } from '..';
import stylesForm from './styles';
import { colors, } from '../../styles';


const Form = (props) => {
 let { onSubmit } = props;
  return(
    <View style={{height: 200, }}>
      
      <View style={[stylesForm.containerTextInput, {borderBottomColor: (props.errors.email)? 'red' : '#605d6f',}]}>
        

          <Icon name='email2' size={18} style={{color: '#fff'}}/>
         
          <TextInput
          autoCapitalize={'none'}
          style={stylesForm.textInputStyle}
          placeholderTextColor={colors.primaryText}
          placeholder={'E-mail'}
          keyboardType={'email-address'}
          value={props.values.email}
          onChangeText={text => props.setFieldValue('email', text)}
          />

      </View>
      { props.errors.email && <Text style={stylesForm.textError}>{props.errors.email}</Text> } 



      <View style={[stylesForm.containerTextInput, {borderBottomColor: (props.errors.password)? 'red' : '#605d6f',}]}>
     
        <Icon name='padlock' size={18} style={{color: '#fff'}}/>

          <TextInput
          secureTextEntry
          style={stylesForm.textInputStyle}
          placeholder={'Senha'}
          placeholderTextColor={colors.primaryText}
          autoCapitalize={'none'}
          value={props.values.password}
          onChangeText={text => props.setFieldValue('password', text)}
          />
          
      </View>
      { props.errors.password && <Text style={stylesForm.textError}>{props.errors.password}</Text> } 


      
       <View style={{ marginTop: 20}}>
        <Button
          loading={props.isSubmitting}
          onPress={props.handleSubmit}
          label="Login"
        />
        </View>
      
    </View>
  );
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  
  validateOnChange: false,

  validationSchema: yup.object().shape({
   
    email: yup.string()
      .email('Informe um e-mail válido!')
      .required('O campo e-mail não pode ser vazio!'),

    password: yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres!')
      .required('O campo senha não pode ser vazio!'),
  
  }),

  handleSubmit: (values) => {
     if(values.email == 'teste@teste.com' && values.password == '123456') Actions.reset('Drawer')
        else  email.errors ="Usuário não encontrado! Verifque seu e-mail ou senha!";
      } 

})(Form);