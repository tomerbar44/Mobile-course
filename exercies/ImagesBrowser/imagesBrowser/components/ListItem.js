import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function ListItem({ navigation, imgObj }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BigImgScreen', {
          imgObj
        })
      }}
    >
      <View style={styles.itemList}>
        <Image style={styles.imgList} source={{ uri: imgObj.previewURL }} />
        <View style={styles.textArea}>
          <Text style={styles.titleList}>{imgObj.user}</Text>
          <View style={styles.itemList}>
            <Text style={styles.textList}>Views: {imgObj.views}</Text>
            <Text style={styles.textList}>Likes: {imgObj.likes}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  imgList: {
    margin: 10,
    width: 60,
    height: 60
  },
  textArea: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 5,
    paddingLeft: 8
  },
  textList: {
    flex: 1,
    fontSize: 14,
    color: 'grey'
  },
  titleList: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
