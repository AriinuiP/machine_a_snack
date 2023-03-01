import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Image, Pressable, ScrollView, Alert, TextInput } from 'react-native';

import colors from '../config/colors';

interface AccountScreenProps {
    navigation:any;
  }

  function AccountScreen(props : AccountScreenProps) {

    const settings = () => props.navigation.navigate("Settings");

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.press} onPress={settings}>
                <Image style={styles.image}
                        source={require('../../app/assets/icons/arrow_left.png')} 
                        resizeMode='cover'
                    />
                </Pressable>
            <Text style={styles.title}> 
                My account
            </Text>
            <View style={ styles.subContainer}>
                <Text style={styles.h1}>
                    My balance : -- --- $
                </Text>

                <View style={ styles.sub2Container} > 
                    <Text style={styles.h2}> Add credits:  </Text>
                    <TextInput  style={styles.inputButton} placeholder="Credits "/>
                    <Pressable style={styles.button} >
                        <Text style={styles.textButton}> Add </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );

  }

  export default AccountScreen;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      },

      title: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: colors.ternary,
        flex:0, 
        fontSize: 25,
        color: colors.text_color,
        fontFamily: 'Avenir-Heavy',
    },

      h1: {
        fontSize: 30,
        fontFamily : 'Avenir-Heavy',
        color: colors.text_color,
        alignSelf:'flex-start',
      },

      subContainer: {
        padding: 10,
        margin: 20,
        width: '90%',
        height: '100%',
        flex: 1,
        backgroundColor: colors.secondary,
      },

      sub2Container: {
        padding: 4,
        alignSelf: 'center',
        margin: 10,
        width: '90%',
        flex: 0,
        backgroundColor: colors.primary,
      },

      h2: {
        fontSize: 20,
        marginLeft: 10,
        fontFamily : 'Avenir-Heavy',
        color: colors.text_color,
        alignSelf:'flex-start',
      },

      inputButton: {
        margin: 10,
        marginBottom: 0,
        fontSize: 12,
        padding: 13,
        width: "80%",
        height: "7%",
        backgroundColor: "white",
        borderRadius: 40,     
      },
      button: {
        alignSelf:'center',
        margin: 10,
        padding:8,
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

    image:{
      width: 30,
      height: 30,
    },

    press: {
        position: 'absolute',
        top: '2%',
        left: '2%',
        zIndex: 1,
        flex: 0,
      },
  })