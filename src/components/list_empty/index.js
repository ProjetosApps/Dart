import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'

import styles from './styles'

import { colors } from '../../styles' 

export const ListEmpty = props => {

	let { loading } = props;
	
	if(loading){
		return(<ActivityIndicator size="small" color={colors.primary} style={{marginTop: 10}}/> )
	}else{

 		return(
 				<View style={styles.container}>

	                <View style={styles.containerImage}>

	                    <Image source={require('../../assets/images/telescope.png')} style={styles.image} />

	                </View>

	                <Text style={styles.textHeader}>Tudo limpo!</Text>
	                <Text style={styles.textMensage}>Nenhum repositório foi encontrado {'\n'} para o parâmetro de pesquisa informado.</Text>

        		</View>)
	}

}
