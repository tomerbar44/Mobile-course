import 'react-native-gesture-handler';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import GridItem from './GridItem';
import ListItem from './ListItem';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      images: [],
      search: '',
      gridView: true,
      gridButton: '#70A6E8',
      listButton: 'grey',
    }
  }
  componentDidMount() {

  }


  updateSearch = search => {
    // this.setState({ isLoading: false, contacts: data })
    this.setState({ search: search, isLoading: true });

    const url = `https://pixabay.com/api/?key=16010070-61ae78d69d027ee701c67fec8&q=${search}&image_type=photo&pretty=true`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({ isLoading: false, images: json.hits })
        //    console.log(json);
      })
  };

  render() {
    return (
      <View style={styles.activityIndator}>
        <SafeAreaView />
        <View style={{ width: '100%' }}>
          <SearchBar placeholder="Search" onChangeText={this.updateSearch} value={this.state.search} lightTheme={true} containerStyle={{ backgroundColor: '#DCDDDD' }} inputContainerStyle={{ backgroundColor: '#FFFFFF' }} />
        </View>
        <View style={styles.buttons}>
          <Button title="Grid View" onPress={() => this.setState({ gridView: true, listButton: 'grey', gridButton: '#70A6E8' })} color={this.state.gridButton} />
          <Button title="List View" onPress={() => this.setState({ gridView: false, listButton: '#70A6E8', gridButton: 'grey' })} color={this.state.listButton} />
        </View>
        {this.state.isLoading && (<View style={styles.activityIndator}><ActivityIndicator size="large" color="#0000ff" /></View>)}
        {this.state.search == '' || this.state.images.length == 0 ?
          (<View style={styles.activityIndator}>
            <Text style={{ fontSize: 28, textAlign: 'center' }}>No Results were found</Text></View>) : this.state.gridView ?
            (<FlatList key={'grid'} data={this.state.images} numColumns={3}
              renderItem={({ item }) => <GridItem id={item.id} navigation={this.props.navigation} bigUrl={item.largeImageURL} gridUrl={item.previewURL} />}
              keyExtractor={item => item.id}
            />)
            : (<FlatList key={'list'} data={this.state.images}
              renderItem={({ item }) => <ListItem id={item.id} navigation={this.props.navigation} bigUrl={item.largeImageURL} views={item.views} likes={item.likes} url={item.previewURL} />}
              keyExtractor={item => item.id}
            />)
        }

      </View>

    );
  }

}
// check witch button press and do map over the array. if img click open in big
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  logo: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F6CFCA',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  search: {
    width: '1',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,
    fontSize: 25,
    padding: 20,
    margin: 10,
    color: 'black',
  },
  activityIndator: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
});

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId } = route.params;
//   const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }