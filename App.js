import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Mobile}>
        <Text style={styles.Title}>Titulo Mobile</Text>
      </View>
      <View style={styles.Div}>
        <Text style={styles.TextTitle}>Olá mundo!</Text>
        <Text style={styles.P}>Minha primeira aplicação mobile!</Text>
        <StatusBar style="auto" />
      </View>
     </View>
   );
} 
 
const  styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#aee2eb',
     alignItems: 'center',
     justifyContent: 'center',
  },
 
  Div: { 
    backgroundColor: 'white',
    width: 250, 
    height: 230,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title: {
    color: 'white',
    fontSize: 50,
    marginTop: -150,
    textDecorationLine: 'underline', 
  },

  TextTitle: {
    fontSize: 30,
    marginTop: -100,
    padding: 20,
  },

  P: {
    fontSize: 16,
    padding: 7,
    textAlign: 'center',
   }
});
