import * as React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();
async function play(stream_url) {
  try {
    await soundObject.unloadAsync();
    await soundObject.loadAsync({ uri: stream_url+'?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE'});
    await soundObject.playAsync();
  } catch (error) {
    console.log(error)
    // An error occurred!
  }
}

function ImageItem({ isGridItem, navigation, trackObj }) {
  return (
    <TouchableOpacity
      onPress={() => {
        play(trackObj.stream_url);
      }}
    >
      {isGridItem ? (
        <Image style={styles.gridImg} source={{ uri: trackObj.artwork_url }} />
      ) : (
          <View style={styles.itemList}>
            <Image style={styles.imgList} source={{ uri: trackObj.waveform_url }} />
            <View style={styles.textArea}>
              <Text style={styles.titleList}>{trackObj.title}</Text>
              <View style={styles.itemList}>
                <Text style={styles.textList}>Views: {trackObj.stream_url}</Text>
                <Text style={styles.textList}>Likes: {trackObj.comment_count}</Text>
              </View>
            </View>
          </View>
        )}
    </TouchableOpacity>
  )
}

ImageItem.propTypes = {
  navigation: PropTypes.object,
  trackObj: PropTypes.object,
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