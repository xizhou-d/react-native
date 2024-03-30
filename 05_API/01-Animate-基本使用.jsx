import React, {useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Easing,
} from 'react-native';

const App = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeInHandle = () => {
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true
    }).start()
  }

  const fadeOutHandle = () => {
    Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
    }).start()
  }

  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={[
            styles.fadingContainer,
            {
                opacity: fadeAnim
            }
        ]}>
            <View>
                <Text>被控制的部分</Text>
            </View>
        </Animated.View>
        <View>
            <Button title="fade in view" onPress={fadeInHandle} />
            <Button title="fade out view" onPress={fadeOutHandle} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default App;