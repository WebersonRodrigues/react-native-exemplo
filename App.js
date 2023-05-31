import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/index.js';
import Home from './src/pages/Home/index.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>

          <Stack.Screen 
          name='Login'
          component={Login}
          options={{
            title: ""
          }}
          />

          <Stack.Screen 
          name='Home'
          component={Home}
          options={
            {
              title: "",
              headerStyle:{
                backgroundColor:"#FF5722"
              }
            }
          }
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
