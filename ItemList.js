import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Dimensions, TouchableOpacity, Image, SafeAreaView, FlatList, Button, StyleSheet, Text, View } from 'react-native';

const ItemList = ({ route, navigation}) => {
  
  const { items } = route.params
  
  useEffect( () => {
    console.log(items)
  })

  const goToDetails = (item) => {
    navigation.navigate('Edit Photo', {name: item.name, image: item.image});
  }

  const itemRow = ({ item }) => (
    <TouchableOpacity
      style={styles.cell}
      onPress={() => goToDetails(item)} >
      <Image 
        style={styles.image}
        source={item.image}/>
    </TouchableOpacity>
  );
  
  const columnWidth=Math.floor(Dimensions.get('window').width/styles.image.width)
  
  console.log("columnWidth:"+columnWidth);
  
  
  return (
    
    <SafeAreaView style={styles.grid}>
      <FlatList
        contentContainerStyle={styles.grid}
        data={items}
        renderItem={itemRow}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default ItemList;







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  grid: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
  },
  cell: {
    width: 130,
    height: 130,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image: {
    width: 125,
    height: 125,
  }
});
