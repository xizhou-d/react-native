import { StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native'

export default function App() {
    function onTextChange(value) {
        console.log('value', value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={onTextChange} placeholder='请输入内容' />
            <TextInput style={styles.textInput} onChangeText={onTextChange} placeholder='请输入 number' keyboardType='numeric' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        padding: 10, 
    }
})