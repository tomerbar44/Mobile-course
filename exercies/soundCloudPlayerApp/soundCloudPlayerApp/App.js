import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/rootReducer';
import PlayerApp from './src/PlayerApp';
import RecentSearches from './src/components/RecentSearches';

const Stack = createStackNavigator();
const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, compose(middlewares));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={PlayerApp}
            options={() => ({
              headerStyle: {
                backgroundColor: '#FF5500'
              },
              headerTitleStyle: {
                fontSize: 28,
                fontWeight: 'normal'
              },
              title: 'Sound Cloud Player'
            })}
          />
          <Stack.Screen
            name="RecentSearches"
            component={RecentSearches}
            options={() => ({
              headerStyle: {
                backgroundColor: '#FF5500'
              },
              headerTitleStyle: {
                fontSize: 28,
                fontWeight: 'normal'
              },
              title: 'Recent Searches',
              headerBackTitle: 'Back'
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
