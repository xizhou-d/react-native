import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';

const { width } = Dimensions.get('window')

const App = () => {
  const offsetRef = useRef(new Animated.Value(0)).current
  const onScrollHandle = (e) => {
    console.log('e.nativeEvent', e.nativeEvent.contentOffset.x)
  }
  console.log('offsetRef', offsetRef)
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            horizontal={true}
            style={styles.imageStyle}
            // onScroll={onScrollHandle}
            onScroll={
                Animated.event([{
                    nativeEvent: { contentOffset: { x: offsetRef } }
                }], {
                    useNativeDriver: false
                })
            }
        >
            <Animated.Image 
                style={[styles.imageStyle, {
                    opacity: offsetRef.interpolate({
                        inputRange: [0, 420],
                        outputRange: [1, 0]
                    })
                }]}
                source={require(' ')}
                resizeMode='cover'
            />
             <Image 
                style={styles.imageStyle}
                source={require('../assets/shihao04.webp')}
                resizeMode='cover'
            />
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  imageStyle: {
    height: 200,
    width: width
  }
});

export default App;