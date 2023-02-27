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
              <Text style={styles.guest}> Continue as a guest </Text>
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
        margin: 8,
        fontSize: 12,
        padding: 10,
        width: "80%",
        height: "7%",
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderRadius: 40,
        borderColor:"white",        
      },

    logo: {
        width: 200,
        height: 200,
    },

    title: {
      top: 100,
      position: "absolute",
      fontSize: 15,
      fontWeight:"700",
      marginTop: 20,
      marginBottom: 30,
      color:colors.text_color,
      textDecorationLine: "underline",
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
      shadowColor: "#9e5308",
      shadowOpacity: 0.7,
      shadowRadius: 2,
      shadowOffset: {
        height: 2,
        width: 0
      }
    },

    textButton: {
      fontWeight:"bold",
      fontSize: 17,
      color:colors.primary,
    }

  });