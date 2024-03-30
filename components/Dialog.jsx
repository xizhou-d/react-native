import React from 'react'
import { View, Text, Dimensions, StyleSheet, Button, Image, Pressable } from 'react-native'

import IconClose from '../assets/svg/close'
import RadioUncheck from '../assets/svg/radio_uncheck'
import RadioCheck from '../assets/svg/radio_check'

const width = Dimensions.get('window')

export default function Dialog(props) {
    const { isShowDialog = false, title, content, buttonContent, closeDialog } = props

    if (!isShowDialog) return null
    return (
        <View style={styles.dialog}>
            <View style={styles.bg}>
                <Image style={styles.image} source={require('../assets/shihao03.jpeg')} />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{content}</Text>
                <View style={styles.buttonContent}>
                    <Text>{buttonContent}</Text>
                </View>
            </View>
            <Pressable onPress={closeDialog}>
                <IconClose />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    },
    dialog: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'hidden',
    },
    bg: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingTop: 15
    },
    buttonContent: {
        paddingTop: 10
    }
})