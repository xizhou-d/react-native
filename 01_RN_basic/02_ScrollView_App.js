import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>111111111111</Text>
                <Image source={require('./assets/shihao.jpeg')} style={{width: 200, height: 400}} />
                <Image source={require('./assets/yangjian.png')} />
                <Image source={require('./assets/shihaochijian.webp')} />
                <Image source={require('./assets/shihao03.jpeg')} />
                <Text>222222222222</Text>
                <Image />
                <Text>333333333333</Text>
                <Image />
                <Text>444444444444</Text>
                <Image />
                <Text>555555555555</Text>
                <Image />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    }
})