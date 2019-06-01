import React from 'react'
import { View, Text, } from 'react-native';

import { Icon } from '..';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

import stylesCustom from './styles';

export const CardRepo = (props) => {
    let { item } = props;

    nome_abr = '';
    if(item.name != ''){
        if(item.name.trim().split(/\s+/).length > 1){
            nome_abr = item.name.match(/\b(\w)/g)
        } else {
            nome_abr = item.name.substring(0,2);
        }

        nome_abr = nome_abr.charAt(0).toUpperCase() + nome_abr.slice(1);
    }

    return( 
        <TouchableScale onPress={() => props.onPress(item.url)} 
                        activeScale={0.98}>

            <LinearGradient colors={['#6173f5', '#7188ec', '#0088CC']} 
                            style={stylesCustom.containerCardClinicas}
                            start={{ x: 0.5, y: 0 }} 
                            end={{ x: 2, y: 0 }}>

                <View style={stylesCustom.bodyCardClinicas}>

                    <View style={stylesCustom.leftContainer}>

                        <View style={stylesCustom.contentContainerLeft}>
                            <Text style={stylesCustom.textAbr}>{nome_abr}</Text>
                        </View>

                    </View>


                    <View style={stylesCustom.containerCenter}>
                        
                        <View >
                            <Text style={[stylesCustom.textDefault, { fontSize: 17, fontWeight: 'bold'}]}>{item.name}</Text>
                            <Text style={[stylesCustom.textDefault, {marginVertical: 10}]}>{item.description}</Text>
                            <Text style={[stylesCustom.textDefault, {}]}>{item.url}</Text>
                        </View>

                    </View>

                
                    <View style={stylesCustom.containerRight}>

                        <View style={stylesCustom.containerIconArrow}>
                            <Icon name='left-arrow' size={22} style={stylesCustom.iconSemiCirculo}/>
                        </View>
                        
                        <View style={stylesCustom.semiCirculo} />

                    </View>
            

                </View>
            


            </LinearGradient> 

        </TouchableScale>
    )
}
