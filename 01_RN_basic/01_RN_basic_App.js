import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight } from 'react-native'
import { useState } from 'react'

export default function App() {
    const [text, setText] = useState('')

    function onPressHandle() {
        console.log('屈原')
    }
    return (
        // 样式的设置
        // <View style={styles.container}>
        //     <Text style={styles.text}>xizhou</Text>
        //     <Text style={styles.red}>red</Text>
        //     <Text style={styles.green}>green</Text>
        //     <Text style={[styles.red, styles.green]}>style 传递一个数组</Text>
        //     <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
        //     <View style={{width: 100, height: 100, backgroundColor: 'greenyellow'}}></View>
        //     <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}></View>
        // </View>

        // <View style={styles.container}>
        //     <View style={{ flex: 1, backgroundColor: 'greenyellow' }}></View>
        //     <View style={{ flex: 2, backgroundColor: 'skyblue' }}></View>
        //     <View style={{ flex: 3, backgroundColor: 'red' }}></View>
        // </View>

        // 使用百分比
        // <View style={{ height: '100%' }}>
        //     <View style={{ height: '15%', backgroundColor: 'greenyellow' }}></View>
        //     <View style={{ height: '35%', width: '33%', backgroundColor: 'skyblue' }}></View>
        //     <View style={{ height: '50%', width: '66%', backgroundColor: 'red' }}></View>
        // </View>

        // 本地图片和网络图片的导入
        // <View style={styles.container}>
        //     <Image style={styles.img} source={require('./assets/shihao.jpeg')}></Image>
        //     <Image style={styles.img} source={{uri: 'https://i1.hdslb.com/bfs/archive/5cf7fea82c9ac5d75d907545e068373debb4cb7f.jpg '}}></Image>
        // </View>

        // 文本输入
        // <View style={styles.container}>
        //     <TextInput
        //         defaultValue={text}
        //         placeholder="请输入文本"
        //         style={styles.textInputStyle}
        //         onChangeText={(text) => setText(text)}
        //     />
        //     <Text>你输入的内容为：{text}</Text>
        // </View>

        // 按钮
        // <View style={styles.container}>
        //     <Button 
        //         onPress={onPressHandle}
        //         title='AAA'
        //     />
        // </View>

        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => {
                    console.log('触摸效果')
                }}
                onLongPress={() => {
                    console.log('长按效果')
                }}
                disabled={false}    // 默认是 false，如果是 true 表示关闭该组件的触摸功能
                onPressIn={() => {
                    console.log('触摸开始')
                }}
                onPressOut={() => {
                    console.log('触摸结束')
                }}
            >
                <View style={{width: 200, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'}}>
                    <Text style={{color: '#fff'}}>button</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textDecorationLine: 'underline'
    },
    red: {
        color: 'red',
        fontSize: 20,
        fontWeight: '400'
    },
    green: {
        color: 'green'
    },
    img: {
        width: 200,
        height: 200,
    },
    textInputStyle: {
        width: 200,
        height: 40,
        borderColor: '#000',
        borderWidth: 1
    }
})