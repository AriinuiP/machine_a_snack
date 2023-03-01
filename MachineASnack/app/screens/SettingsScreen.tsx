import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Image, Pressable } from 'react-native';

import colors from '../config/colors';

interface SettingsScreenProps {
    navigation:any;
  }
  

function SettingsScreen(props : SettingsScreenProps) {

    const product = () => props.navigation.navigate("Product");
    const admin = () => props.navigation.navigate("Admin");
    const account = () => props.navigation.navigate("Account");

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.press} onPress={product}>
            <Image style={styles.image}
                    source={require('../../app/assets/icons/arrow_left.png')} 
                    resizeMode='cover'
                />
            </Pressable> 
            <View style={{flex: 1, alignItems:'center', marginTop:'20%', width:"100%"}} >
            <Pressable style={styles.button} onPress={account} >
              <Text style={styles.textButton}> ACCOUNT DETAILS </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={admin} >
              <Text style={styles.textButton}> ADMIN AND MAINTENANCE OPTIONS </Text>
            </Pressable>
          </View>
        </SafeAreaView>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      },

      image:{
        width: 50,
        height: 50,
      },

      press: {
        position: 'absolute',
        top: '2%',
        left: '2%',
        alignSelf: "flex-start",
        zIndex: 1,
        flex: 0,
      },
      
      button: {
        margin: 15,
        padding:10,
        width: "50%",
        backgroundColor: colors.ternary,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 4,
          width: 0
        }
      },

      textButton: {
        fontWeight:"bold",
        fontSize: 17,
        color:colors.text_color,
        textAlign:'center',
      },

      h1: {
        fontSize: 30,
        fontFamily : 'Avenir-Heavy',
        color: colors.text_color,
      },
})