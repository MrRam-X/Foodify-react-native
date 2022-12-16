import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Home from './components/Home';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Foodify</Text>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default App;
