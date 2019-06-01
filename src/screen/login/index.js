import React, { Component } from 'react';
import { View, } from 'react-native';

import { connect } from 'react-redux';

import { styles } from '../../styles';
import  Form from '../../components/form_login';
import { Container, Logo, } from '../../components';


class Login extends Component {

    render() {
        
        let { } = this.props;
        
        return( 
            <Container noHeader
                       style={styles.containerLogin} >
            
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'flex-end'}}> 
                
                    <Logo />

                </View>

                <View style={{flex: 3, marginHorizontal: 50,  justifyContent: 'center' }}> 
                
                    <Form onSubmit={(email = '', password = '') => this._logar(email, password)}/>

                </View>
               

            </Container>

        );
    }
}

const mapStateToProps = state => {
    // let { } = state.ProfissionalReducer;
    return ({  });
}

export default connect(mapStateToProps, {  })(Login);
