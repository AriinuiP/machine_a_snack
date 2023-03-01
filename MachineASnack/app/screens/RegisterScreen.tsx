import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, Pressable, Image, View, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

import colors from '../config/colors';

interface RegisterScreenProps {
    navigation:any;
  }
  

function RegisterScreen(props : RegisterScreenProps) {

    const login = () => props.navigation.navigate("Login");

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={login} >
                 <Image style={styles.image} 
                    source={require('../../app/assets/icons/arrow_left.png')} 
                    resizeMode='cover'
                />
            </TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center', flex:1, width:'100%', height:"80%", marginTop: -100}}>
                <Text style={styles.title}> Register </Text> 
                <TextInput  style={styles.inputButton} placeholder={"E-mail adress or Username"}/>
                <TextInput  style={styles.inputButton} secureTextEntry={true} placeholder={"Password"}/>
                <TextInput  style={styles.inputButton} secureTextEntry={true} placeholder={"Password confirmation"}/>
                <Pressable style={styles.button} onPress={login} >
                    <Text style={styles.textButton}> CREATE ACCOUNT </Text>
                </Pressable>
            </View>
            
        </SafeAreaView>
    );
}

export default RegisterScreen;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
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
      title: {
        fontSize: 60,
        fontFamily : 'Avenir-Heavy',
        marginTop: 20,
        marginBottom: 30,
        color: colors.text_color,
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
      },

      backButton: {
        alignSelf : 'flex-start',
        flex: 0,

      },

      image:{
        width: 60,
        height: 60,
      },

      touchable: {
        top: '2%',
        left: '2%',
        alignSelf: "flex-start",
        zIndex: 1,
      },
})