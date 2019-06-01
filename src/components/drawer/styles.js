import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    colors,
    metrics,
    fonts
} from '../../styles';

const styles = StyleSheet.create({

    // drawer styles

    content: {

        flex: 1,
        backgroundColor: colors.white,
        padding: metrics.padding,
        justifyContent: 'space-between',
        
    },

    textHeader: {
        textAlign: 'center',
        color: colors.primary, 
        fontFamily: fonts.bold, 
        fontSize: fonts.bigger,
    },


    contanerHeader: {
        paddingBottom: 10, 
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },

     buttonExit: {
        height: 45, 
        width: '100%', 
        paddingHorizontal: 8,
        alignItems: 'center', 
        flexDirection: 'row', 
        backgroundColor: colors.primary,
    },




    textButtomExit: {

        marginLeft: 10,
        color: colors.primaryText,
    },

   
});

export default styles;
