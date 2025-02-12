import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { IconSectionProps } from "../types";
import { Text } from "@react-navigation/elements";

export function IconSection({title, desc, icon} : IconSectionProps) : React.JSX.Element {
    return(
        <View style={styles.container}>
            {
                icon?             
                <View style={styles.col1}>
                    <Image 
                        source={icon}
                        style={styles.icon}
                    />
                </View> : null
            }
            <View style={styles.col2}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

const {fontScale} = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        minHeight: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopWidth: 0.5,
        borderTopColor: '#8b6a57',
        paddingVertical: 20,
    },
    icon: {
        width: "90%",
        height: 'auto',
        aspectRatio: 1
    },
    col1: {
        width: '20%'
    },
    col2: {
        width: '60%',
        justifyContent: 'center',
    },
    desc: {
        fontSize: 16 * fontScale,
    },
    title: {
        fontSize: 20 * fontScale,
        fontWeight: 'bold',
        color: '#8b6a57'
    }
});