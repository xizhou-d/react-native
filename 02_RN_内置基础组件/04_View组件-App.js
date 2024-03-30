import { StyleSheet, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
            <View style={styles.item} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: 50,
        height: 50,
        borderWdith: 1,
        margin: 10,
        backgroundColor: 'red'
    }
})