import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({
    containerTextInput: {
        height: 50, 
        paddingRight: 20,
        alignItems: 'center', 
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },

    textInputStyle: {
        flex: 1,
        textAlign: 'center', 
        color: colors.white, 
    },

    textError: {
        color: '#fff', 
        textAlign: 'center',
    },
});




