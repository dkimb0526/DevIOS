import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, Button, Alert} from 'react-native';


export default function Screen1({navigation}) {

  const [wasteProduct, setWasteProduct] = useState("");
  const handlePress = () => alert("yo you clicked on something");
  const buttonPress = () => Alert.prompt("waste production", "enter your number", text => setWasteProduct(text));
  const handleImagePress = () => {
    // Navigate to the 'AnotherScreen' when the image is pressed
    navigation.navigate('s2');
  };
  return (
    <SafeAreaView style={[styles.container, containStyle]}>
      <Text onPress={handlePress}>Hello world</Text>
      <StatusBar style="auto" />

      <TouchableWithoutFeedback onPress={handleImagePress}>
      <Image source={require("./assets/CarbonF.png")} />
      </TouchableWithoutFeedback>
      <Button
      color = "green" 
      title='This is a button'
      onPress={buttonPress}/>
      <Text>
        This is your waste production: {wasteProduct}
      </Text>
    </SafeAreaView>
  );
}

const containStyle = {backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
