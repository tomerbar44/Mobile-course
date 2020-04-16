import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function GridItem({id,navigation, bigUrl, gridUrl }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('BigImgScreen', {
                    bigUrl: bigUrl,
                    gridUrl: gridUrl,
                    id:id,
                });
            }}
        >
            <Image style={styles.tinyLogo} source={{ uri: gridUrl }} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    tinyLogo: {
        margin: 20,
        width: 100,
        height: 100,
    },
});