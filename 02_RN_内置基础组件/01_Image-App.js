import { StyleSheet, View, Text, Image } from 'react-native'
/**
 * 使用 Image 组件时，有一个常用的属性 resizeMode，此属性用于控制当组件和图片尺寸不成比例时以何种方式调整图片的大小，对应的值有 5种:
 * cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸
 * contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸。
 * stretch: 拉伸图片且不维持图片的宽高比，直到宽度和高质都刚好填满容器。
 * repeat: 在维持原始尺寸的前提下，重复平铺图片直到填清容器。
 * center: 居中且不拉伸的显示图片。
 */
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>cover:</Text>
            <Image style={[styles.image, { resizeMode: 'cover' }]} source={require('../assets/shihao03.jpeg')} />
            <Text style={styles.text}>contain:</Text>
            <Image style={[styles.image, { resizeMode: 'contain' }]} source={require('../assets/shihao03.jpeg')} />
            <Text style={styles.text}>stretch:</Text>
            <Image style={[styles.image, { resizeMode: 'stretch' }]} source={require('../assets/shihao03.jpeg')} />
            <Text style={styles.text}>repeat:</Text>
            <Image style={[styles.image, { resizeMode: 'repeat' }]} source={require('../assets/shihao03.jpeg')} />
            <Text style={styles.text}>center:</Text>
            <Image style={[styles.image, { resizeMode: 'center' }]} source={require('../assets/shihao03.jpeg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: 140,
        height: 110,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 28,
    }
})