import React from "react";
import { Image, StyleSheet } from "react-native";

export function Profile() : React.JSX.Element {
    return(
        <>
            <Image
                source={require('../assets/RowanRaza.jpg')}
                style={style.img}
            />
        </>
    )
}

const style = StyleSheet.create({
    img: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1.5,
    }
})