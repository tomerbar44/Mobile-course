import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'
import HomeScreen from './components/HomeScreen'
import BigImgScreen from './components/BigImgScreen'
import FavoriteScreen from './components/FavoriteScreen'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#F6CFCA',
            },
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: 'normal',
            },
            headerRight: () => (
              <Icon raised name='heart' color='#00aced' type='font-awesome' size={20} containerStyle={{ paddingBottom: 5, paddingRight: 5 }} onPress={() => navigation.navigate('FavoriteScreen')} />),
            title: 'Images Broswer',
          })} />
        <Stack.Screen name="BigImgScreen" component={BigImgScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#F6CFCA',
            },
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: 'normal',
            },
            headerBackTitle: 'Back',
            title: 'Images Broswer',
          })} />
        <Stack.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#F6CFCA',
            },
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: 'normal',
            },
            title: 'Favorites',
            headerBackTitle: 'Back',
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;