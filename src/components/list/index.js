import React from 'react';
import { View, FlatList } from 'react-native';

import { CardRepo, ListEmpty,  } from '..';
import stylesForm from './styles';
import { colors, } from '../../styles';


export const List = (props) => { 
    let { data = [] } = props;

    return (
        <View style={{flex: 1, marginTop: 10 }}>
            
            <FlatList data={data} 
            		      ListEmptyComponent={() => <ListEmpty loading={props.loading} /> }
                      showsVerticalScrollIndicator={false} 
                      renderItem={({item, index}) => <CardRepo onPress={props.onPress} item={item}  key={index} />}
                      />

        </View>
    );
}


