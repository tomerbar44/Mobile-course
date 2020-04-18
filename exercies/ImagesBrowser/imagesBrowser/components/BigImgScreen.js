import * as React from 'react'
import { StyleSheet, View, Image, AsyncStorage } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

class BigImgScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isInFavorite: false
    }
  }
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem(this.props.route.params.imgObj.id.toString())
      if (value !== null) {
        this.setState({ isInFavorite: true })
      }
    } catch (error) {
      console.error(error)
    }
  }
  async storeData() {
    try {
      await AsyncStorage.setItem(
        this.props.route.params.imgObj.id.toString(),
        JSON.stringify(this.props.route.params.imgObj)
      )
      this.setState({ isInFavorite: true })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (
      <View style={styles.containter}>
        <Image style={styles.img} source={{ uri: this.props.route.params.imgObj.largeImageURL }} />
        {!this.state.isInFavorite && (
          <Icon
            raised
            name="heart"
            color="#00aced"
            type="font-awesome"
            containerStyle={styles.iconStyle}
            onPress={() => {
              this.storeData()
            }}
          />
        )}
      </View>
    )
  }
}

BigImgScreen.propTypes = {
  route: PropTypes.object
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'contain'
  },
  containter: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  iconStyle: {
    alignItems: 'center',
    paddingBottom: 50
  }
})

export default BigImgScreen
