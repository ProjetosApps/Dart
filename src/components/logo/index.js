import React from 'react';
import { Image , View,} from 'react-native';

export const Logo = (props) => (
    <View style={{height: 150, width: 150,}}>
        <Image source={require('../../assets/images/logo_login.png')} style={{flex: 1, width: null, height: null }}/>
    </View>
);
