import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Image, Pressable, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';

import colors from '../config/colors';

interface ProductScreenProps {
    navigation:any;
  }

  // Simultation de la base de données
  const DATA = [
    {
      id: '000',
      title: 'Café',
      keywords:"key",
      uri:require('../../app/assets/produits/café.png')
    },
    {
      id: '001',
      title: 'Doritos',
      uri:require('../../app/assets/produits/Doritos.png')
    },
    {
      id: '002',
      title: 'Kit Kat',
      keywords:"key",
      uri:require('../../app/assets/produits/KitKat.png')
    },
    {
        id: '003',
        title: 'Madeleines',
        keywords:"key",
        uri:require('../../app/assets/produits/Madeleines.png')
    },
    {
        id: '004',
        title: 'Pokeball',
        keywords:"key",
        uri:require('../../app/assets/produits/Pokeball.png')
    },
    {
        id: '005',
        title: 'Ramune',
        keywords:"key",
        uri:require('../../app/assets/produits/Ramune.png')
    },

    {
        id: '006',
        title: 'Rotui',
        keywords:"key",
        uri:require('../../app/assets/produits/Rotui.png')
    },
    {
        id: '007',
        title: 'Tim Tam',
        keywords:"key",
        uri:require('../../app/assets/produits/TimTam.png')
    },
  ];
  
  type ItemProps = { title: string, uri: string, payment: () => void};
  
  const Item = ({title, uri, payment}: ItemProps) => {
  
    const handleLongPress = () => {
        Alert.alert(
          'STEAL',
          'Do you want to steal this product ?',
          [
            { text: 'No', onPress: () => console.log('No') },
            { text: 'Yes', onPress: () => console.log('Yes') },
          ]
        );
      }

    return (
        <View>
            <TouchableOpacity style={styles.product} onPress={payment} delayLongPress={1000} onLongPress={handleLongPress}>
                <Image source={uri} resizeMode='cover'/>
            </TouchableOpacity>
            <Text style={styles.productText}> {title}</Text>
        </View>
        
    );
  };

function ProductScreen(props : ProductScreenProps) {

    const login = () => props.navigation.navigate("Login");
    const payment = () => props.navigation.navigate("Payment");
    const settings = () => props.navigation.navigate("Settings");


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Pressable style={styles.press} onPress={settings}>
            <Image style={styles.image}
                    source={require('../../app/assets/icons/settings_3.png')} 
                    resizeMode='cover'
                />
            </Pressable>
            <Text style={ styles.available }>
                Products Available
            </Text> 
            <SearchBar
                placeholder="Search Here..." 
                darkTheme
                    round
                autoCorrect={false}
            />
            </View>
            <FlatList style={{flex:1, width: '100%'} } 
                contentContainerStyle={{ alignItems: 'center' }}
                key={'_'}
                numColumns={2}
                data={DATA}
                renderItem={({item}) => <Item title={item.title} uri={item.uri} payment={payment}/>}
                keyExtractor={item => item.id}
                
            />
            <View style={styles.footer}>

                <Pressable onPress={login}>
                    <Text style={styles.pressable}> LOG OUT </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },

    product: {
        width: 128,
        overflow:'hidden',
        height: 128,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
        
    },

    available: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: colors.ternary,
        flex:0, 
        fontSize: 25,
        color: colors.text_color,
        fontFamily: 'Avenir-Heavy',
    },
    
    productText: {
        flex:0, 
        fontSize: 15,
        width: '70%',
        marginTop: -13,
        alignSelf: 'center',
        textAlign: 'center',
        color: colors.text_color,
        fontFamily: 'Avenir',
        backgroundColor : colors.secondary,
        shadowColor: "black",
        shadowOpacity: 0.7,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 0
      }
    },
    header: {
        width: '100%',
    },

    footer: {
        flex : 0,
        width: '100%',
        height: 50,
        backgroundColor: colors.ternary,
        alignContent: 'center',
    },

    pressable: {
        flex: 0,
        color: 'white',
        margin: 10,
        padding: 5,
        fontFamily : 'Avenir-Heavy',
        textAlign: 'center',
        alignSelf: 'stretch',
        backgroundColor: colors.secondary,
    },

    image:{
        width: 30,
        height: 30,
      },

      press: {
        position: 'absolute',
        top: '2%',
        right: '2%',
        zIndex: 1,
        flex: 0,
      },
});