import { useState } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'

export default function App() {
    const [localUri, setLocalUri] = useState('')

    async function openImagePickerAsync() {
        // 异步的选择图片
        // 1. 首先，我们需要获取一下权限
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permissionResult.granted === false) {
            alert('需要访问本地图片的权限')
            return
        }

        // 没有进入到上面的 if 说明权限获取成功
        // 异步打开手机的相册，让用户选择图片
        let pickerResult = await ImagePicker.launchImageLibraryAsync() 

        if (pickerResult.canceled) {
            // 进入此 if，说明用户没有选择任何图片
            return
        }

        // 没有进入到上面的 if 说明用户选择了图片，就保存 pickerResult 对象中的 uri  =>  file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Frn_demo-73b30e04-a42e-44f4-9b42-9d14db866a50/ImagePicker/5b950eb4-d882-49e9-bd75-7ff83e26760a.jpeg
        setLocalUri(pickerResult.assets[0].uri)
    }

    async function openShareImageAsync() {
        await Sharing.shareAsync(localUri)
    }

    function goBack() {
        setLocalUri('')
    }

    if (localUri) {
        return (
            <View style={styles.container}>
                <Image source={{uri: localUri}} style={styles.logo} />
                <Text style={styles.instructions}>按下按钮与朋友分享图片</Text>
                <TouchableOpacity style={styles.button} onPress={openShareImageAsync}>
                    <Text style={styles.buttonText}>分享图片</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goBack}>
                    <Text style={styles.buttonText}>重新选择</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Image source={require('./assets/shihaochijian.webp')} style={styles.logo} />
            <Text style={styles.instructions}>按下按钮与朋友分享图片</Text>
            <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
                <Text style={styles.buttonText}>选择图片</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: 'center',
        marginBottom: 10
    },
    button: {
        backgroundColor: 'blue',
        paddingLeft: 20,
        paddingRight: 20,
        paddingButton: 10,
        paddingTop: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    }
})