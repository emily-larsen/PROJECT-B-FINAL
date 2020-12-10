import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const Stack = createStackNavigator();

const App = () => {


  const [cameraPermission, askForCameraPermission] = Permissions.usePermissions(Permissions.CAMERA, {ask:true})
  const [cameraRollPermission, askForCameraRollPermission] = Permissions.usePermissions(Permissions.CAMERA, {ask:true})


  const [items, setItems] = useState([
    {id: 1, name: 'wow', image: require('./assets/img1.jpg')},
    {id: 2, name: 'Norway', image: require('./assets/img2.jpg')},
    {id: 3, name: 'slov', image: require('./assets/img3.jpg')},
    {id: 4, name: 'Third Item', image: require('./assets/img4.jpg')},
    {id: 5, name: 'Just someone', image: require('./assets/img5.jpg')},
    {id: 6, name: 'Cheese barrel', image: require('./assets/img6.jpg')},
    {id: 7, name: 'Cow', image: require('./assets/img7.jpg')},
    {id: 8, name: 'Lowfi Girl', image: require('./assets/img8.jpg')},
    {id: 9, name: 'Mario', image: require('./assets/img9.jpg')},
    {id: 10, name: 'My King', image: require('./assets/img10.jpg')},
    {id: 11, name: 'Off white jawns', image: require('./assets/slov.jpg')},
    {id: 12, name: 'U KnOw Da VIbez', image: require('./assets/norway.jpg')},
  ])


  useEffect( () => {
  if (items.length != 0) {
    storeData(items);
  }
});


const storeData = async (items) => {
  try {
    const json = JSON.stringify(items)
    await AsyncStorage.setItem('@items', json)
  } 
  catch (e) {
    console.log(e)
    // saving error
  }
}


  const takePhoto = async () => {
    if (cameraPermission.status == 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true
      });

      if (result.uri) {
        if (cameraRollPermission.status == 'granted') {
          MediaLibrary.saveToLibraryAsync(result.uri);
          const item = {
            image: result.base64
          }
          setItems([...items, item]);
          //saves items
        }
      }

    }
    else {
      askForCameraPermission()
    }
  }



  const pickPhoto = async () => {
    if (cameraRollPermission.status == 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        base64: true
      });

      //pick image, save
      if (result.base64) {
          const item = {
            image: result.base64
          }
          setItems([...items, item]);
      }

    }
    else {
      askForCameraRollPermission()
    }
  }



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Ems Photos"
          component={ItemList}
          initialParams={{ items: items }} 
          options={{
            headerRight: () => (
              <View style={styles.buttons}>
                    <Button 
                      title="Camera"
                      onPress={takePhoto}
                      />
                    <Button 
                      title="Library"
                      onPress={pickPhoto}
                      buttonStyle={styles.libraryButton}
                      />
              </View>
            )
          }}
          />
             
        <Stack.Screen name="Edit Photo"
                      component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;



const styles = StyleSheet.create({
  buttons: {
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 5
  },
    libraryButton: {
      marginLeft: 245,
    }

})