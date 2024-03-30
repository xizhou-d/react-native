import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native'
import { useState } from 'react'

export default function App() {
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    function onChangeText(value) {
        setText(value)
        setShow(true)
    }
    function hideOption(newVal) {
        setText(newVal)
        setShow(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* 搜索框 */}
            <View style={styles.searchContainer}>
                {/* 输入框 */}
                <TextInput
                    style={styles.inputStyle}
                    placeholder='请输入搜索内容'
                    onChangeText={onChangeText}
                    value={text}
                    returnKeyType='search'
                />
                {/* 搜索按钮 */}
                <View style={styles.btnStyle}>
                    <Text style={styles.search} onPress={() => { alert(text) }}>搜索iiii</Text>
                </View>
            </View>
            {/* 在搜索框下方显示搜索结果 */}
            {
                show ? (
                    <View style={styles.resultStyle}>
                        <Text style={styles.itemStyle} numberOfLines={1} onPress={() => hideOption(text + '街道')}>{text}街道</Text>
                        <Text style={styles.itemStyle} numberOfLines={1} onPress={() => hideOption(text + '道路')}>{text}道路</Text>
                        <Text style={styles.itemStyle} numberOfLines={1} onPress={() => hideOption('80' + text + '车站')}>80{text}车站</Text>
                    </View>
                ) : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    inputStyle: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        flex: 1,
        paddingLeft: 5,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 20
    },
    searchContainer: {
        flexDirection: 'row',
        height: 45,
    },
    btnStyle: {
        width: 80,
        marginTop: 20,
        marginLeft: -10,
        marginRight: 10,
        height: 45,
        backgroundColor: '#23BEFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    resultStyle: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 200,
        backgroundColor: '#ccc',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    itemStyle: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0
    }
})