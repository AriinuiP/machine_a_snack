import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { REACT_APP_BASE_URL} from '@env';
import { io } from "socket.io-client";
import colors from '../config/colors';

const ProductListSocket = ({props}) => {
  const [produits, setProduits] = useState([]);
  
  const BASE_URL = REACT_APP_BASE_URL;

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.emit('getProduits');
    socket.on('produits', data => {
      setProduits(data);
      socket.disconnect();
    });
  },[]);

  const handleLongPress = () => {
    Alert.alert(
    'STEAL',
    'Do you want to steal this product ?',
    [
        { text: 'No', onPress: () => console.log('No') },
        { text: 'Yes', onPress: () => console.log('Yes') },
    ]
    );
  }

  const handlePress = (item) => {
    props.navigation.navigate("Payment",item);
  }

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.product} onPress={() => handlePress(item)} delayLongPress={1000} onLongPress={handleLongPress}>
        <Image source={getImageByIndex(item._id)} resizeMode='cover'/>
      </TouchableOpacity>
      <Text style={styles.productText}> {item.name +"\n"+ item.prix+" francs"}</Text>
    </View>
  );
  
  return (
    <FlatList style={{flex:1, width: '100%'}} 
      contentContainerStyle={{ alignItems: 'center' }}
      numColumns={2}
      data={produits}
      renderItem={renderItem}
      keyExtractor={item => item._id.toString()}
    />
  );

  
};

export default ProductListSocket;

function getImageByIndex(index:number) {
  switch(index) {
    case 1:
      return require('../../app/assets/produits/café.png');
    case 2:
      return require('../../app/assets/produits/Doritos.png');
    case 3:
      return require('../../app/assets/produits/KitKat.png');
    case 4:
      return require('../../app/assets/produits/Madeleines.png');
    case 5:
      return require('../../app/assets/produits/Pokeball.png');
    case 6:
      return require('../../app/assets/produits/Ramune.png');
    case 7:
      return require('../../app/assets/produits/Rotui.png');
    case 8:
      return require('../../app/assets/produits/TimTam.png');
    default:
      return null;
  }
}


const styles = StyleSheet.create({

  product: {
      width: 128,
      overflow:'hidden',
      height: 128,
      backgroundColor: 'white',
      margin: 20,
      borderRadius: 10,
      
  },

  productText: {
      flex:0, 
      fontSize: 15,
      width: '70%',
      marginTop: -13,
      alignSelf: 'center',
      textAlign: 'center',
      color: colors.text_color,
      backgroundColor : colors.secondary,
      shadowColor: "black",
      shadowOpacity: 0.7,
      shadowRadius: 2,
      shadowOffset: {
      height: 1,
      width: 0
    }
  },
});