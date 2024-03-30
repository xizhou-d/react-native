import { StyleSheet, ScrollView, View, Text, Image, FlatList, StatusBar } from 'react-native'
import React from 'react'

const DATA = [
    { key: 'a'},
    { key: 'b'},
    { key: 'c'},
    { key: 'd'},
    { key: 'e'},
    { key: 'f'},
    { key: 'g'},
    { key: 'h'},
    { key: 'i'},
    { key: 'j'},
    { key: 'k'},
    { key: 'l'},
    { key: 'm'},
    { key: 'n'},
    { key: 'o'},
    { key: 'p'},
    { key: 'q'},
    { key: 'r'},
    { key: 's'},
    { key: 't'},
    { key: 'u'},
    { key: 'v'},
    { key: 'w'},
    { key: 'x'},
    { key: 'y'},
    { key: 'z'},
];

export default function App() {
    
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                keyExtractor={item => item.key}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        marginTop: StatusBar.currentHeight || 0,
        opacity: 0,
    },
    item: {
        height: 40,
        borderWidth: 1,
        fontSize: 30,
        marginBottom: 10,
        backgroundColor: 'greenyellow',
        width: 400
    }
})