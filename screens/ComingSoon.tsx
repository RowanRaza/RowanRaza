import React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ComingSoon() : React.JSX.Element {
    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/coming.png')}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})