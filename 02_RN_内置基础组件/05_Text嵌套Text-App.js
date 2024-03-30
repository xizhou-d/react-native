import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'

export default function App() {
    const [titleText, setTitleText] = useState('this is baseText.')
    const bodyText = 'This is a not really bird nest.'

    function onPressHandle() {
        setTitleText('skdfjlskfdskdjlk')
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* Text 组件在外面套一层 Text，那外层 Text 里面的 Text 会在一行显示；否则，单独的 Text 是独占一行的 */}
            <Text style={styles.style}>
                {/* 除了继承 baseText 的样式外，还有自己的样式 */}
                <Text style={styles.titleText} onPress={onPressHandle}>{titleText}{'\n'}</Text>
                {/* 继承 baseText 的样式 */}
                <Text style={styles.bodyText}>{bodyText}</Text>
                <Text>
                    <Text>First part and </Text>
                    <Text>second part</Text>
                </Text>
            </Text>
            <Text>
                <Text style={{fontSize: '28', color: '#999'}}>First page</Text>
                <Text>and</Text>
                <Text style={{fontSize: '20', color: 'red'}}>Second page</Text>
            </Text>
            <View>
                <Text>First part and</Text>
                <Text>second part.</Text>
            </View>

            {/* 被 Text 嵌套的 Text 组件与位置相关的 *style* 样式几乎都不生效: padding margin */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 28 }}>
                    我是一段普通文字
                    <Text style={{ paddingLeft: 10 }}>左 padding 10</Text>
                    <Text style={{ marginLeft: 10}}>左 margin 10</Text>
                </Text>
            </View>

            {/* 内嵌在 Text 组件中的 Text 组件 *numberOfLines* 属性会失效 */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 28, borderWdith: 1 }}>
                    1.{" "}
                    <Text numberOfLines={2} ellipsizeMode={'tail'}>
                        我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字我是一段普通文字
                    </Text>
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    borderWidth: 1
                }}>
                    <Text style={{ fontSize: 20 }}>我是文字</Text>
                    <Text style={{ fontSize: 30 }}>我是大一点的文字</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: 10,
                    borderWidth: 1
                }}>
                    <Text style={{ fontSize: 20 }}>我是文字</Text>
                    <Text style={{ fontSize: 30 }}>我是大一点的文字</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    baseText: {
        fontSize: 30
    },
    titleText: {
        fontSize: 20,
        fontWeight: '800'
    },
    bodyText: {
        fontSize: 40
    }
})