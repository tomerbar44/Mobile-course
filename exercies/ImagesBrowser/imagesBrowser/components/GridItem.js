import * as React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function GridItem({ navigation, imgObj }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BigImgScreen', {
          imgObj
        })
      }}
    >
      <Image style={styles.gridImg} source={{ uri: imgObj.previewURL }} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  gridImg: {
    margin: 5,
    width: 120,
    height: 120
  }
})
