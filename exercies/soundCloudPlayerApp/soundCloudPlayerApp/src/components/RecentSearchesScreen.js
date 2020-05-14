import React from 'react';
import { arrayOf, string, bool, shape } from 'prop-types';
import { FlatList, View, Text } from 'react-native';

const TodoList = ({ route }) => {
    let { recentSearches } = route.params;
    // change to use effect
    recentSearches=recentSearches.slice(Math.max(recentSearches.length - 5, 1))
    return (
        <View>
        <Text>Recent Searches</Text>
        <FlatList
            keyExtractor={item => item}
            data={recentSearches}
            renderItem={({ item, index }) => {
                return (
                    <View>
                        <Text keyExtractor={index}>{index+1}. {item}</Text>
                    </View>
                );
            }}
            ListEmptyComponent={() => (
                <View>
                    <Text>no items</Text>
                </View>
            )}
        />
        </View>
    );
};

TodoList.propTypes = {
    items: arrayOf(
        shape({
            id: string,
            text: string,
            isDone: bool
        })
    )
};

export default TodoList;