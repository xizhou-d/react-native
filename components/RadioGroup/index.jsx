import React from 'react'
import { View, } from 'react-native'

import RadioButton from './RadioButton'

export default function RadioGroup(props) {
    const { options, orintation, defaultValue, drawablePadding, handleChange } = props

    return (
        <View style={{ flexDirection: orintation, justifyContent: 'space-between' }}>
            {
                options?.map((item, index) => {
                    return (
                        <RadioButton
                            selected={defaultValue === index}
                            drawablePadding={drawablePadding}
                            key={index}
                            item={item}
                            index={index}
                            handleChange={handleChange}
                        />
                    )
                })
            }
        </View>
    )
}