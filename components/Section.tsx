import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SectionProps } from "../types";
export function Section({title, desc, onPress} : SectionProps) : React.JSX.Element {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </TouchableOpacity>
    )
}

const {fontScale} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        borderTopColor: "#e0c3b4",
        marginHorizontal: '2.5%',
        padding: '5%'
    },
    title: {
        fontSize: 18 * fontScale,
        fontWeight: 'bold',
        color: '#8b6a57',
        textDecorationLine: 'underline',
    },
    desc: {
        fontSize: 16 * fontScale,
        color:'#1f1c1d',
        marginTop: 10
    }
})