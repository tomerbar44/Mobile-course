/* eslint-disable prettier/prettier */
import * as React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  AsyncStorage
} from 'react-native'

import GridItem from './GridItem'

export default class FavoriteScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      images: []
    }
  }
  componentDidMount() {
    AsyncStorage.getAllKeys((_err, keys) => {
      AsyncStorage.multiGet(keys, (_err, stores) => {
        stores.map((_result, i, store) => {
          const value = store[i][1]
          this.state.images.push(JSON.parse(value))
        })
        this.setState({ isLoading: false })
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading && (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {this.state.images.length === 0 ? (
          <View style={styles.messageContainer}>
            <Text style={styles.message}>No Favorite Images were found 🙄</Text>
          </View>
        ) : (
          <SafeAreaView>
            <FlatList
              key={1}
              data={this.state.images}
              numColumns={3}
              contentContainerStyle={{ alignItems: 'center' }}
              renderItem={({ item }) => (
                <GridItem navigation={this.props.navigation} imgObj={item} />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  message: {
    fontSize: 26,
    textAlign: 'center'
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})
