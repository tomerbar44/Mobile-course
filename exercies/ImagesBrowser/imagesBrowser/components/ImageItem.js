import * as React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'

function ImageItem({ isGridItem, navigation, imgObj }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BigImgScreen', {
          imgObj
        })
      }}
    >
      {isGridItem ? (
        <Image style={styles.gridImg} source={{ uri: imgObj.previewURL }} />
      ) : (
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
      )}
    </TouchableOpacity>
  )
}

ImageItem.propTypes = {
  navigation: PropTypes.object,
  imgObj: PropTypes.object,
  isGridItem: PropTypes.bool
}

const styles = StyleSheet.create({
  gridImg: {
    margin: 5,
    width: 120,
    height: 120
  },
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

export default ImageItem
