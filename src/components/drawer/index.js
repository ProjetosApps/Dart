import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Icon } from '..';

import styles from './styles';

export default class Drawer extends Component {
 
    render() {

        return (

            <View style={styles.content}>
                <View style={styles.containerHeader}>
                    <Text style={styles.textHeader}>Bem Vindo!</Text>
                </View>

                <TouchableOpacity onPress={() => Actions.reset('Login')}>
                    <View style={styles.buttonExit}>
                        <Icon name={'log-out'} size={22} style={{color: '#fff'}}/>
                        <Text style={styles.textButtomExit}>Sair</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}
