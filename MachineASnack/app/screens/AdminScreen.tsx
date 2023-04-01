import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Image, Pressable, ScrollView, Alert, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

import colors from '../config/colors';

interface AdminScreenProps {
    navigation:any;
  }
  

function AdminScreen(props : AdminScreenProps) {

    const admin = () => props.navigation.navigate("Admin");
    
    const cleaning = () => {
        Alert.alert(
          'Cleaning Done',
          'Machine has been clean up !',
          [
            { text: 'OK', onPress: () => console.log('OK') },
          ]
        );
      }

      const maintenance = () => {
        Alert.alert(
          'Maintenance Done',
          'Everything is working !',
          [
            { text: 'OK', onPress: () => console.log('OK') },
          ]
        );
      }

    const settings = () => props.navigation.navigate("Settings");

    return (
        <SafeAreaView style={styles.container}>
          
            <View style={styles.header}>
                <Pressable style={styles.press} onPress={settings}>
                <Image style={styles.image}
                        source={require('../../app/assets/icons/arrow_left.png')} 
                        resizeMode='cover'
                    />
                </Pressable>
                <Text style={ styles.title }>
                Administration
            </Text> 
            </View>

            <ScrollView style={{flex:1, width:'100%'}}>

                <View style={styles.subContainer} >
                    <Text style={styles.h1}>
                        Maintenance 
                    </Text>
                    <Text style={styles.h2}>
                        Cleaning 
                    </Text>
                    <Pressable style={styles.button} onPress={cleaning} >
                        <Text style={styles.textButton}> Clean up </Text>
                    </Pressable>
                    <Text style={styles.h2}>
                        Maintenance 
                    </Text>
                    <Pressable style={styles.button} onPress={maintenance} >
                        <Text style={styles.textButton}> Maintenance </Text>
                    </Pressable>
                </View>

                <View style={styles.subContainer}>
                    <Text style={styles.h1}>
                        Add a product
                    </Text>
                    <SearchBar platform='default' round lightTheme={false} placeholder="Product Name..." autoCorrect={false}/>
                    <View style={styles.sub2Container}>
                        <Text style={styles.h2}>
                            Price  
                        </Text>
                        <TextInput  style={styles.inputButton} placeholder="price of product"/>
                    </View>
                    <Pressable style={styles.button}  >
                        <Text style={styles.textButton}> Add </Text>
                    </Pressable>
                </View>

                <View style={styles.subContainer}>

                    <Text style={styles.h1}>
                        Delete a product
                    </Text>
                    <SearchBar placeholder="Product Name..." darkTheme round autoCorrect={false}/>
                    <Pressable style={styles.button} >
                        <Text style={styles.textButton}> Delete </Text>
                    </Pressable>

                </View>

                <View style={styles.subContainer} >

                    <Text style={styles.h1}>
                        Modify a product  
                    </Text>
                    
                    <SearchBar placeholder="Product Name..." darkTheme round autoCorrect={false}/>

                    <View style={styles.sub2Container}>
                        <Text style={styles.h2}>
                        Change quantity  
                    </Text>
                    <TextInput  style={styles.inputButton} placeholder="New price"/>
                    </View>
                    
                    <View style={styles.sub2Container}>
                        <Text style={styles.h2}>
                        Change price  
                    </Text>
                    <TextInput  style={styles.inputButton} placeholder="New price"/>
                    </View>
                    
                    <View style={styles.sub2Container}>
                        <Text style={styles.h2}>
                        Apply sale  
                    </Text>
                    <TextInput  style={styles.inputButton} placeholder="Percentage"/>
                    </View>
                    <Pressable style={styles.button} >
                        <Text style={styles.textButton}> Apply </Text>
                    </Pressable>

                </View>

                <View style={styles.subContainer} >
                    <Text style={styles.h1}>
                        Transactions
                    </Text>
                </View>

                <View style={styles.subContainer} >
                    <Text style={styles.h1}>
                        Statistics
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export default AdminScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
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
        height: '100%',
        flex: 1,
        backgroundColor: colors.primary,
      },

      h1: {
        fontSize: 30,
        fontFamily : 'Avenir-Heavy',
        color: colors.text_color,
        alignSelf:'flex-start',
      },

      h2: {
        fontSize: 15,
        marginLeft: 10,
        fontFamily : 'Avenir-Heavy',
        color: colors.text_color,
        alignSelf:'flex-start',
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
      press: {
        position: 'absolute',
        top: '2%',
        left: '2%',
        zIndex: 1,
        flex: 0,
      },

      header: {
        width: '100%',
      },
      image:{
        width: 30,
        height: 30,
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
})