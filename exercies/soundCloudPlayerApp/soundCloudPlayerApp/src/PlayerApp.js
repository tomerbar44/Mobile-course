import React from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator, Button, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as actions from './components/playerActions';
import TrackItem from './components/TrackItem'


const mapStateToProps = ({ player }) => {
  return {
    items: player.tracks,
    recentSearches: player.recentSearches
  };
};

const TodoApp = ({ items, loadTracks, navigation, recentSearches ,loadFiveSearches}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Type Here...'}
        style={styles.searchBarContainer}
        onSubmitEditing={({ nativeEvent: { text } }) => loadTracks(text)}
      />


      {false && (
        <View style={styles.activityIndator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      { items.length === 0 ? (
        <View style={styles.activityIndator}>
          <Text style={styles.message}>No Results were found 🙄</Text>
        </View>
      ) : (
          <FlatList
            key={2}
            data={items}
            renderItem={({ item }) => (
              <TrackItem
                isGridItem={false}
                navigation={navigation}
                trackObj={item}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      <Button
        title="Press me"
        onPress={() => {
          // add use effect
          navigation.navigate('RecentSearchesScreen', {
            recentSearches
          })
        }}
  
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  message: {
    fontSize: 28,
    textAlign: 'center'
  },
  activityIndator: {
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  flatListStyle: {
    alignItems: 'center'
  },
  searchBarContainer: {
    backgroundColor: '#FFFFFF',
    height: 45,
    fontSize: 22,
    borderColor: '#DCDDDD',
    borderWidth: 7,
    borderStyle: "solid",
  },
  searchBarInput: {
    backgroundColor: '#FFFFFF'
  }
})

const ConnectedTodoApp = connect(mapStateToProps, actions)(TodoApp);
export default ConnectedTodoApp;




//   render() {
//     return (
//       <View style={styles.container}>
//         <SearchBar
//           placeholder="Search"
//           onChangeText={queryChanged}
//           value={query}
//           lightTheme
//           containerStyle={styles.searchBarContainer}
//           inputContainerStyle={styles.searchBarInput}
//         />
//         {false  && (
//           <View style={styles.activityIndator}>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         )}
//         {query === '' || items.length === 0 ? (
//           <View style={styles.activityIndator}>
//             <Text style={styles.message}>No Results were found 🙄</Text>
//           </View>
//         ) :  (
//           <FlatList
//             key={2}
//             data={items}
//             renderItem={({ item }) => (
//               <ImageItem
//                 isGridItem={this.state.gridView}
//                 navigation={navigation}
//                 trackObj={item}
//               />
//             )}
//             keyExtractor={(item) => item.id}
//           />
//         )}
//       </View>
//     )
//   }
// }

// HomeScreen.propTypes = {
//   navigation: PropTypes.object
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFF'
//   },
//   message: {
//     fontSize: 28,
//     textAlign: 'center'
//   },
//   activityIndator: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   buttons: {
//     justifyContent: 'space-around',
//     flexDirection: 'row'
//   },
//   flatListStyle: {
//     alignItems: 'center'
//   },
//   searchBarContainer: {
//     backgroundColor: '#DCDDDD'
//   },
//   searchBarInput: {
//     backgroundColor: '#FFFFFF'
//   }
// })

// export default HomeScreen

// searchIcon = {
//   < Button
// color = "#000000"
// buttonStyle = {{ backgroundColor: 'transparent' }}
// icon = {< Icon name = "image-search" size = { 30} />}
// title = ""
// iconContainerStyle
// onPress = { this.handleSendSearchQuery }
//   />