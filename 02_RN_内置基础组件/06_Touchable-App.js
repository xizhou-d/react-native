import { StyleSheet, View, SafeAreaView, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import React, { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight style={styles.touchableStyle} onPress={() => {setCount(count + 1)}} underlayColor="#DDDDDD">
                <Text style={styles.textStyle}>点击+1</Text>
            </TouchableHighlight>

            <TouchableOpacity style={styles.touchableStyle} onPress={() => {setCount(count + 1)}}>
                <Text style={styles.textStyle}>点击+1</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={() => {setCount(count + 1)}}>
                <View style={styles.touchableStyle}>
                    <Text style={styles.textStyle}>点击+1</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableNativeFeedback onPress={() => {setCount(count + 1)}}>
                <View style={styles.touchableStyle}>
                    <Text style={styles.textStyle}>点击+1</Text>
                </View>
            </TouchableNativeFeedback> 

            <Text style={styles.countText}>{count}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    touchableStyle: {
        width: 300,
        height: 38,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#06C1AE',
        marginTop: 20,
        marginBottom: 20
    },
    textStyle: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
    },
    countText: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 38,
        color: '#06C1AE'
    }
})