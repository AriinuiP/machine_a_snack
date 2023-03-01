import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Alert } from 'react-native';

import colors from '../config/colors';

interface PaymentScreenProps {
    navigation:any;
  }

const PaymentScreen = (props: PaymentScreenProps) => {

  const product = () => props.navigation.navigate("Product");

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.press} onPress={product}>
            <Image style={styles.image}
                    source={require('../../app/assets/icons/arrow_left.png')} 
                    resizeMode='cover'
                />
            </Pressable> 
          <View style={{flex: 1, alignItems:'center', marginTop:'20%', width:"100%"}}>
            <Text style={ styles.h1}> Payment </Text>
            <Text style={ styles.h3}> Choose a payment method</Text>
            <Text style={ styles.h3}> Item price : --- $</Text>
            <Text style={ styles.h3}> Your balance : -- --- $</Text>
          </View>
          <View style={{flex: 4, alignItems:'center', marginTop:'20%', width:"100%"}} >
            <Pressable style={styles.button} onPress={product} >
              <Text style={styles.textButton}> CONTACTLESS PAYMENT </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={product} >
              <Text style={styles.textButton}> PAY WITH ACCOUNT CREDITS </Text>
            </Pressable>
          </View>

        </SafeAreaView>
    )
  }

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      },

      h1: {
        fontSize: 60,
        fontFamily : 'Avenir-Heavy',
        color: colors.text_color,
      },

      h3: {
        fontSize: 15,
        fontFamily : 'Avenir-Heavy',

        color: colors.text_color,
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

      backButton: {
        alignSelf : 'flex-start',
        flex: 0,

      },

      
})

