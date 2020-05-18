import React from 'react';
import { FlatList, Text, View, ActivityIndicator, Button, TextInput } from 'react-native';
import { bool, object, array, func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './components/playerActions';
import TrackItem from './components/TrackItem';
import styles from './style/style';

const mapStateToProps = ({ player }) => {
  return {
    tracks: player.tracks,
    recentSearches: player.recentSearches,
    isLoading: player.isLoading
  };
};

const PlayerApp = ({ loadTracks, navigation, recentSearches, tracks, isLoading }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={' Type Here...'}
        style={styles.searchBarContainer}
        onSubmitEditing={({ nativeEvent: { text } }) => loadTracks(text)}
      />
      {isLoading && (
        <View style={styles.activityIndator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {tracks.length === 0 ? (
        <View style={styles.activityIndator}>
          <Text style={styles.message}>No Results were found 🙄</Text>
        </View>
      ) : (
        <FlatList
          key={2}
          data={tracks}
          renderItem={({ item }) => <TrackItem trackObj={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
      <View style={styles.buttonStyle}>
        <Button
          title="Recent Searches"
          onPress={() => {
            navigation.navigate('RecentSearches', {
              recentSearches
            });
          }}
        />
      </View>
    </View>
  );
};

PlayerApp.propTypes = {
  isLoading: bool,
  tracks: array,
  recentSearches: array,
  loadTracks: func,
  navigation: object
};

const ConnectedPlayerApp = connect(mapStateToProps, actions)(PlayerApp);
export default ConnectedPlayerApp;
