import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';

const ProductList = ({props}) => {
  const [produits, setProduits] = useState([]);
  

  useEffect(() => {
    fetch('http://192.168.178.31:3000/produits')
      .then(response => response.json())
      .then(data => setProduits(data))
      .catch(error => console.error(error));
  }, []);


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

export default ProductList;

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
      fontFamily: 'Avenir',
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