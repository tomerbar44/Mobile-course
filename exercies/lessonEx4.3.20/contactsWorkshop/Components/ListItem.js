import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ListItem({ id , bigUrl, navigation, views, likes, url }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('BigImgScreen', {
                    bigUrl: bigUrl,
                    gridUrl: url,
                    id:id,
                });
            }}
        >
            <View style={styles.itemList}>
                <Image style={styles.tinyLogo2} source={{ uri: url }} />
                <Text style={{ fontSize: 18, textAlign: 'center' }}>Views: {views}   Likes: {likes}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    itemList: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    tinyLogo2: {
        margin: 10,
        width: 50,
        height: 50,
    },

});