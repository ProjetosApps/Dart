import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({
    containerTextInput: {
        height: 50, 
        alignItems: 'center', 
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },

    textInputStyle: {
        flex: 1,
        textAlign: 'center', 
        color: colors.white, 
    }
});




