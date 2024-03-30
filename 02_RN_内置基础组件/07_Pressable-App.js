import { Pressable, View, Text, StyleSheet } from "react-native";

export default function App() {
    function onPressIn() {
        console.log('pressIn')
    }
    function onPressout() {
        console.log('pressOut')
    }
    function onPress() {
        console.log('press')
    }
    function onLongPress() {
        console.log('longPress')
    }
    return (
        <View style={styles.container}>
            <Pressable
                onPressIn={onPressIn}
                onPressOut={onPressout}
                onPress={onPress}
                onLongPress={onLongPress}
                style={({pressed}) => {
                    console.log('pressed', pressed)
                    if (pressed) {
                        return styles.pressedStyle
                    }
                    return styles.unPressedStyle
                }}
                // hitSlop 可以设置，扩大点击区域
                hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
            >
                {
                    ({pressed}) => (
                        <Text>{pressed ? 'release me' : 'press me'}</Text>
                    )
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressedStyle: {
        height: 50,
        width: 300,
        lineHeight: '100',
        backgroundColor: 'rgb(210, 230, 255)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    unPressedStyle: {
        backgroundColor: 'skyblue',
        color: '#fff'
    }
})