import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import RadioGroup from '../components/RadioGroup'

export default function CustomRadio() {
    const options = [{ text: 'abc' }, { text: 'cba' }, { text: 'nba' }]
    const [selectedIndex, setSelectedIndex] = useState()

    const handleChange = (index) => {
        console.log('click radio.')
        setSelectedIndex(index)
    }

    return (
        <SafeAreaView>
            <RadioGroup
                options={options}
                orintation='row'
                defaultValue={selectedIndex}
                drawablePadding={20}
                handleChange={handleChange}
            />
        </SafeAreaView>
    )
}