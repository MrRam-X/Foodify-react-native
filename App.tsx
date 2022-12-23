import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './constants/ColorConstants';
import Foods from './screens/Foods';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTitleAlign: 'center',
            headerTintColor: Colors.lightText,
            headerTitleStyle: {
              fontSize: 22,
            },
            statusBarColor: Colors.primary,
            contentStyle: {
              backgroundColor: Colors.light4
            }
          }}>
          <Stack.Screen options={{
            header: () => null
          }} name='Home' component={Home} />
          <Stack.Screen name='Foods' component={Foods} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
