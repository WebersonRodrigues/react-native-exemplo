import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login/index.js';
import Home from './src/pages/Home/index.js';
import Settings from './src/pages/Settings/index.js';
import Reports from './src/pages/Reports/index.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigate = () => {

  return (
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
      component={TabNavigate}
      options={
        {
          title: "",
          headerStyle: {
            backgroundColor: "#FF5722"
          }
        }
      }
    />

    <Stack.Screen
      name='Settings'
      component={Settings}
      options={
        {
          title: "",
          headerStyle: {
            backgroundColor: "#FF5722"
          }
        }
      }
    />

    <Stack.Screen
      name='Reports'
      component={Reports}
      options={
        {
          title: "",
          headerStyle: {
            backgroundColor: "#FF5722"
          }
        }
      }
    />

  </Stack.Navigator>
  );
}

const TabNavigate = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate></StackNavigate>
      {/* <TabNavigate></TabNavigate> */}
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
