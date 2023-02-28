import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, Image, Button, Pressable } from 'react-native';

import colors from '../config/colors';

interface LoginScreenProps {
  navigation:any;
}


function LoginScreen(props : LoginScreenProps) {

  const home = () => props.navigation.navigate("Product");

  return (
      <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Snac'King </Text>             
            <TextInput  style={styles.inputButton} placeholder={"E-mail adress or Username"}/>
            <TextInput secureTextEntry={true}  style={styles.inputButton} placeholder={"Password"}/>
              <Pressable style={styles.button} onPress={home} >
                <Text style={styles.textButton}> LOGIN </Text>
              </Pressable>
              <Text style={styles.guest}>CONTINUE AS A GUEST </Text>
          <StatusBar/>
      </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    loginBox: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      width: "70%",
      height: "80%",
      borderRadius:10,
      shadowColor: "#000000",
      shadowOpacity: 0.7,
      shadowRadius: 2,
      shadowOffset: {
        height: 2,
        width: 0
      }
    },

      inputButton: {
        margin: 15,
        fontSize: 12,
        padding: 15,
        width: "80%",
        height: "7%",
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 40,
        borderColor:"white",        
      },

    logo: {
        width: 200,
        height: 200,
    },

    title: {
      top: 50,
      position: "absolute",
      fontSize: 70,
      fontFamily : 'Avenir-Heavy',
      marginTop: 20,
      marginBottom: 30,
      color:colors.text_color,
      textDecorationLine: "underline",
      shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
        height: 5,
        width: 0
      }
    },

    guest: {
      textDecorationLine: "underline",
      color:"#3179cc",
      margin:5,
      fontSize: 16,
    },

    button: {
      margin: 20,
      padding:10,
      width: "50%",
      backgroundColor: "white",
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
      color:colors.primary,
    }

  });