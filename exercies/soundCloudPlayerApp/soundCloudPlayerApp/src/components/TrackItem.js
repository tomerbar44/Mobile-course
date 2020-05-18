import * as React from 'react';
import { object } from 'prop-types';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import styles from '../style/style';

const SC_KEY = '?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE';
const soundObject = new Audio.Sound();

async function playTrack(stream_url) {
  try {
    await soundObject.unloadAsync();
    await soundObject.loadAsync({ uri: stream_url + SC_KEY });
    await soundObject.playAsync();
  } catch (error) {
    console.error(error);
  }
}

function TrackItem({ trackObj }) {
  return (
    <TouchableOpacity
      onPress={() => {
        playTrack(trackObj.stream_url);
      }}
    >
      <View style={styles.itemList}>
        <Image
          style={styles.imgList}
          source={{ uri: trackObj.artwork_url ? trackObj.artwork_url : trackObj.waveform_url }}
        />
        <View style={styles.textArea}>
          <Text style={styles.titleList}>{trackObj.title}</Text>
          <View style={styles.itemList}>
            <Text style={styles.textList}>Genre: {trackObj.genre}</Text>
            <Text style={styles.textList}>Likes: {trackObj.likes_count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

TrackItem.propTypes = {
  trackObj: object
};

export default TrackItem;
