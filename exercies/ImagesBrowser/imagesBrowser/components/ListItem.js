import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ListItem({ navigation, imgObj }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('BigImgScreen', {
                    imgObj: imgObj
                });
            }}>
            <View style={styles.itemList}>
                <Image style={styles.imgList} source={{ uri: imgObj.previewURL }} />
                <Text style={styles.textList} >Views: {imgObj.views}</Text>
                <Text style={styles.textList} >Likes: {imgObj.likes}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    itemList: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    imgList: {
        margin: 10,
        width: 50,
        height: 50,
    },
    textList: {
        flex:1,
        fontSize: 18,
    },
});