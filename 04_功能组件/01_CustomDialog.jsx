import React, { useState } from "react";
import { Button, Text, StyleSheet, View, Pressable, Dimensions } from "react-native";
import Dialog from "../components/Dialog";
import IconClose from '../assets/svg/close'

import Constants from "expo-constants";

const width = Dimensions.get("window");

const App = () => {
    const [isShowDialog, setIsShowDialog] = useState(false)

    const renderDialog = () => {
        return (
            <Dialog
                isShowDialog={isShowDialog}
                title='年底大促'
                content='您的新年礼品，请查收'
                buttonContent='领取新年礼物'
                closeDialog={closeDialog}
            /> 
        )
    }

    const closeDialog = () => {
        setIsShowDialog(false)
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={() => { setIsShowDialog(true) }} style={styles.press}>
                <Text>点击弹框</Text>
            </Pressable>
            {renderDialog()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ECF0F1', 
        padding: 8
    },
    press: {
        width: width,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#33FFF6',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        cursor: 'pointer'
    }
});

export default App;