import React, { useRef } from 'react'
import { ScrollView, Image, StyleSheet, View, Animated, SafeAreaView, Text, ImageBackground, Dimensions } from 'react-native'

const imagesArr = [
    require('../assets/shihao03.jpeg'),
    require('../assets/shihao04.webp'),
    require('../assets/htd.jpeg'),
    require('../assets/shihao.jpeg'),
    require('../assets/shihaochijian.webp'),
]

const { width } = Dimensions.get('window')

export default function App() {
    let contentOffsetRef = useRef(new Animated.Value(0)).current
    console.log('contentOffsetRef', contentOffsetRef)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={
                        Animated.event([{
                            nativeEvent: { contentOffset: { x: contentOffsetRef }}
                        }], {
                            useNativeDriver: false
                        })
                    }
                    scrollEventThrottle={16}
                >
                    {
                        imagesArr.map((item, index) => {
                            return (
                                <View style={{ width: width, height: 250}}  key={index}>
                                    <ImageBackground
                                        source={item}
                                        style={styles.card}
                                    >
                                        <View style={styles.textContainer}>
                                            <Text style={styles.infoText}>{ 'Image_' + index }</Text>
                                        </View>
                                    </ImageBackground>

                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {
                        imagesArr.map((item, index) => {
                            return (
                                <Animated.View style={[styles.normalDot, {
                                    width: contentOffsetRef.interpolate({
                                        inputRange: [
                                            width * (index - 1),
                                            width * (index),
                                            width * (index + 1)
                                        ],
                                        outputRange: [8, 16, 8]
                                    })
                                }]} key={index}></Animated.View>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5
    },
    textContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
