import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, Image, Button, Pressable } from 'react-native';

import colors from '../config/colors';

interface PaymentScreenProps {
    navigation:any;
  }

const PaymentScreen = (props: PaymentScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>

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
})