import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Image, Pressable, ScrollView, Alert, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

import colors from '../config/colors';

interface AccountScreenProps {
    navigation:any;
  }

  function AccountScreen(props : AccountScreenProps) {

    return (
        <SafeAreaView></SafeAreaView>
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
  })