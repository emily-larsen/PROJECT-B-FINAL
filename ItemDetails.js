iimport { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, Button, Text, View } from 'react-native';

  

const ItemDetails = ({ navigation, route }) => {

  const [value, onChangeText] = React.useState('Enter Text');
  const { image } = route.params;

  const goBackToList = () => {
    navigation.navigate('Ems Photos');
  }

  

  return (
    <View style={styles.container}>
      
      <Image style={styles.image}
             source={image} />
      <Text style={styles.title}>
		  {}
      </Text>

      <Text>
		    Photo Name:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g The Woods'
    />

  <Text>
		    Photo Date:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g 11/11/2011'/>

    <Text>
		    Photo Location:
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g  41°2412.2"N 2°E'/>

  <Text>
		    Notes/Comments:
      </Text>
    <TextInput 
    multiline
    style={styles.input} 
    placeholder='e.g Nice Photo'/>

    
  <Button title="Save"
              onPress={goBackToList} />

    <Button title="Go Back"
              onPress={goBackToList} />

      <StatusBar style="auto" />

    </View>
  );
}

export default ItemDetails;






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: 350,
    resizeMode: 'cover',
    marginBottom: 0,
    marginTop: 18,
  },
  input: {
    borderWidth: 3,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,

  }
});
