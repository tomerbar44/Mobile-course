import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function GridItem({ navigation, imgObj }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('BigImgScreen', {
                    imgObj: imgObj
                });
            }}>
            <Image style={styles.gridImg} source={{ uri: imgObj.previewURL }} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    gridImg: {
        margin: 20,
        width: 100,
        height: 100,
    },
});