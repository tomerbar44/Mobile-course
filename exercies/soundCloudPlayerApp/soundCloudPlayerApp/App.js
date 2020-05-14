import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/rootReducer'
import PlayerApp from './src/PlayerApp'
import RecentSearchesScreen from './src/components/RecentSearchesScreen'
const Stack = createStackNavigator()

const middlewares = applyMiddleware(thunk)
const store = createStore(rootReducer, compose(middlewares))

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
          name="RecentSearchesScreen"
          component={RecentSearchesScreen}
          options={() => ({
            headerStyle: {
              backgroundColor: '#FF5500'
            },
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: 'normal'
            },
            title: 'Favorites',
            headerBackTitle: 'Back'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}


