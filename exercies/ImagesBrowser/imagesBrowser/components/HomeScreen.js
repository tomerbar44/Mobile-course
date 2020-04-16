import * as React from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import GridItem from './GridItem';
import ListItem from './ListItem';

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
    updateSearch = search => {
        this.setState({ search: search, isLoading: true });
        const url = `https://pixabay.com/api/?key=16010070-61ae78d69d027ee701c67fec8&q=${search}&image_type=photo&pretty=true`;
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({ isLoading: false, images: json.hits })
            }).catch((error) => {
                console.error(error);
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <SearchBar placeholder="Search" onChangeText={this.updateSearch} value={this.state.search} lightTheme={true} containerStyle={{ backgroundColor: '#DCDDDD' }} inputContainerStyle={{ backgroundColor: '#FFFFFF' }} />
                <View style={styles.buttons}>
                    <Button title="Grid View" onPress={() => this.setState({ gridView: true, listButton: 'grey', gridButton: '#70A6E8' })} color={this.state.gridButton} />
                    <Button title="List View" onPress={() => this.setState({ gridView: false, listButton: '#70A6E8', gridButton: 'grey' })} color={this.state.listButton} />
                </View>
                {this.state.isLoading && (<View style={styles.activityIndator}><ActivityIndicator size="large" color="#0000ff" /></View>)}
                {this.state.search == '' || this.state.images.length == 0 ?
                    (<View style={styles.activityIndator}>
                        <Text style={styles.message}>No Results were found 🙄</Text></View>) :
                    this.state.gridView ?
                        (<FlatList key={1} data={this.state.images} numColumns={3}
                            renderItem={({ item }) => <GridItem navigation={this.props.navigation} imgObj={item} />}
                            keyExtractor={item => item.id}
                        />)
                        : (<FlatList key={2} data={this.state.images}
                            renderItem={({ item }) => <ListItem navigation={this.props.navigation} imgObj={item} />}
                            keyExtractor={item => item.id}
                        />)}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    message: {
        fontSize: 28,
        textAlign: 'center'
    },
    activityIndator: {
        flex: 1,
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
});

