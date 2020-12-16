import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, Button, Text, View, TouchableOpacity} from 'react-native';
import { Value } from 'react-native-reanimated';

  

const ItemDetails = ({ navigation, route, props}) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setnotes] = useState('');
  const { image } = route.params;

  
  const clearItem = () => {
    setItem("");
  }


  const onNameChange = (event) => {
    setName(event.target.value)
  }


  const goBackToList = () => {
    navigation.navigate('Ems Photos');
  }

 

  return (
    <View style={styles.container}>

    <Button title="Go Back"
               onPress={goBackToList} />




      <Image style={styles.image}
             source={image} />
      <Text style={styles.title}>
		  {}
      </Text>

      <Text> Photo Name: {name} 
              </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g The Woods'
    onChangeText={(Val) => setName(Val)}
    />

  <Text>
		   Photo Date: {date}
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g 11/11/2011'
    onChangeText={(Val) => setDate(Val)}
    />




    <Text>
		    Photo Location: {location}
      </Text>
    <TextInput 
    style={styles.input} 
    placeholder='e.g  41°2412.2"N 2°E'
    onChangeText={(Val) => setLocation(Val)}
    />

  <Text>
		    Notes/Comments: {notes}
      </Text>
    <TextInput 
    multiline
    style={styles.input} 
    placeholder='e.g Nice Photo'
    onChangeText={(Val) => setnotes(Val)}
    />


  <Button title="Save"
          onClick={() => props.update(name)} 
             />

 

      <StatusBar style="auto" />

    </View>
  );
 
}


export default ItemDetails;






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Button: {
    flexDirection: "row",
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: 350,
    resizeMode: 'cover',
    marginBottom: -20,
    marginTop: 5,
    borderRadius: 10,
  },
  input: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 300,
  },
 
});
