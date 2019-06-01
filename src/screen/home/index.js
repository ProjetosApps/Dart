import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList,  Linking, TextInput } from 'react-native';

import TouchableScale from 'react-native-touchable-scale';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { styles, colors, fonts } from '../../styles'

import { Container, Search, List, Icon } from '../../components';
import { _getRepos, changeField } from '../../actions'


class Home extends Component {
    constructor(props){
        super(props);

        this.state = { repositories_filter: [], filter: false, textSearch: '' , errors: '' };
    }

    componentDidMount(){
        this._refresh()
    }

    _refresh(){
        this.setState({filter: false, repositories_filter: [] });
        this.props._getRepos();
    }

    _filter(param) {
        if(param.length < 3 ) return this.setState({errors: "O texto deve ter no mínimo 3 caracteres!"});

        let repositories_filter = this.props.repositories.filter(word =>  word.name.includes(param));
        this.setState({filter: true, repositories_filter, errors: "" });
    }

    render() {
        let { filter, repositories_filter, textSearch, errors } = this.state;
        let { repositories, loading } = this.props;
        
        return( 
            <Container menu >

                  <View>
                    <View style={[styles.containerTextInput,]}>
                       
                        <TextInput
                        autoCapitalize={'none'}
                        style={styles.textInputStyle}
                        placeholderTextColor={colors.primary}
                        placeholder={'Buscar repositórios...'}
                        value={textSearch}
                        onChangeText={text => this.setState({textSearch: text})}
                        />

                      <TouchableScale onPress={() => this._filter(textSearch)}
                                      style={styles.buttonSearch}
                                      activeScale={0.98}>
                      
                          <Icon name='magnifying-glass1' size={22} style={{color: '#fff'}}/>
                      
                      </TouchableScale>
                        
                    </View>

                    { errors != '' && <Text style={styles.textError}>{errors}</Text> } 
                </View>



                <List onPress={(url = '') => Linking.openURL(url)} 
                      loading={loading}
                      data={(filter)? repositories_filter : repositories} />



            
            </Container>
        );
    }
}


const mapStateToProps = state => {
    let { repositories, loading } = state.ReposReducer;
    return ({ repositories, loading });
}

export default connect(mapStateToProps, { _getRepos, changeField })(Home);
