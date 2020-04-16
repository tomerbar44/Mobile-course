// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements'



import Home from './Components/home'
import BigImgScreen from './Components/BigImgScreen'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function LogoTitle({ name }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28 }}>Images Broswer</Text>
      <View style={styles.container}>
        {name != 'BigImgScreen' ? (
          <Icon raised name='heart' color='#00aced' type='font-awesome' containerStyle={{ paddingBottom: 15, paddingLeft: 15 }} onPress={() => navigation.navigate('FavoriteScreen')} />
        ) : (<View />)}

      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F6CFCA',
          }, headerTitle: props => <LogoTitle name={'Home'}{...props} />
        }} />

        <Stack.Screen name="BigImgScreen" options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F6CFCA',
          }, headerTitle: props => <LogoTitle name={'BigImgScreen'} {...props} />
        }} component={BigImgScreen} />

        <Stack.Screen name="FavoriteScreen" options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F6CFCA',
          }, headerTitle: props => <LogoTitle name={'FavoriteScreen'} {...props} />
        }} component={BigImgScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});