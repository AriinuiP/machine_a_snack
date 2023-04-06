import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ProductListSocket from '../objects/productListSocket';


import colors from '../config/colors';

interface ProductScreenProps {
    navigation:any;
  }

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
            <ProductListSocket props={props} />
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