import * as React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements'
// import AsyncStorage from '@react-native-community/async-storage';



export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            images: [],
            search: '',
            gridView: true,
            gridButton: '#70A6E8',
            listButton: 'grey',
        }
    }
    componentDidMount() {
        // getData = async () => {
        //     try {
        //       const value = await AsyncStorage.getItem('@storage_Key')
        //       if(value !== null) {
        //         // value previously stored
        //       }
        //     } catch(e) {
        //       // error reading value
        //     }
        //   }

    }
    storeData = async () => {
        // try {
        //     const obj = { id: this.props.route.params.id, bigUrl: this.props.route.params.bigUrl, gridUrl: this.props.route.params.gridUrl };
        //     await AsyncStorage.setItem(JSON.stringify(obj))
        // } catch (e) {
        //     // saving error
        // }
    }
    render() {
        return (
            <View style={styles.containter}>
                <Image style={styles.img} source={{ uri: this.props.route.params.bigUrl }} />
                <Icon raised name='heart' color='#00aced' type='font-awesome' containerStyle={{ alignItems: 'center', paddingBottom: 50 }} onPress={() => storeData()} />

            </View>
        );
    }

}
// check witch button press and do map over the array. if img click open in big
const styles = StyleSheet.create({

    img: {
        flex: 1,
        height: undefined,
        width: undefined,
        resizeMode: 'contain',
    },
    containter: {
        flex: 1,

    }
});
