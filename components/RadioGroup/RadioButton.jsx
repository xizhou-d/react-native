import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import RadioCheck from '../../assets/svg/radio_check'
import RadioUnCheck from '../../assets/svg/radio_uncheck'

export default function RadioButton(props) {
    const { item, drawablePadding, handleChange, index, selected } = props
    return (
        <Pressable onPress={() => handleChange(index)}>
            <View style={styles.radio}>
                { selected ? <RadioCheck /> : <RadioUnCheck /> }
                <Text style={{ paddingLeft: drawablePadding}}>{item.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
})