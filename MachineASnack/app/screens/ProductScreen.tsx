import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Image } from 'react-native';

import colors from '../config/colors';

interface ProductScreenProps {
    navigation:any;
  }

  // Simultation de la base de données
  const DATA = [
    {
      id: '000',
      title: 'café',
      keywords:"key",
      uri:require('../../app/assets/produits/café.png')
    },
    {
      id: '001',
      title: 'Doritos',
      uri:require('../../app/assets/produits/Doritos.png')
    },
    {
      id: '002',
      title: 'Kit Kat',
      keywords:"key",
      uri:require('../../app/assets/produits/KitKat.png')
    },
    {
        id: '003',
        title: 'Madeleines',
        keywords:"key",
        uri:require('../../app/assets/produits/Madeleines.png')
    },
    {
        id: '004',
        title: 'Pokeball',
        keywords:"key",
        uri:require('../../app/assets/produits/Pokeball.png')
    },
    {
        id: '005',
        title: 'Ramune',
        keywords:"key",
        uri:require('../../app/assets/produits/Ramune.png')
    },

    {
        id: '006',
        title: 'Rotui',
        keywords:"key",
        uri:require('../../app/assets/produits/Rotui.png')
    },
    {
        id: '007',
        title: 'Tim Tam',
        keywords:"key",
        uri:require('../../app/assets/produits/TimTam.png')
    },
  ];
  
  type ItemProps = { title: string, uri: string};
  
  const Item = ({title, uri}: ItemProps) => {
    return (
        <TouchableOpacity style={styles.product}>
            <Image source={uri} resizeMode='cover'/>
        </TouchableOpacity>
    );
  };

function ProductScreen(props : ProductScreenProps) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={ styles.productText }>
                Products Available
            </Text>
            <FlatList style={{flex:1, width: '100%'} } 
                contentContainerStyle={{ alignItems: 'center' }}
                key={'_'}
                numColumns={2}
                data={DATA}
                renderItem={({item}) => <Item title={item.title} uri={item.uri} />}
                keyExtractor={item => item.id}
                
            />
        </SafeAreaView>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },

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
        alignSelf: 'center',
        fontSize: 20,
        color: colors.text_color,
    }
});