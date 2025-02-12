import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Linking, ScrollView } from "react-native";
import { Section } from "../components/Section";

const links = {
    facebook: "https://web.facebook.com/rowan.fleurys.5",
    linkedin: "https://www.linkedin.com/in/rowan-razanajatovo-2a7645309",
    chessCom: "https://www.chess.com/member/rowanraza",
    github: "https://github.com/RowanRaza"
}

const descs = {
facebook:    
`Nom : Razanajatovo Rowan
Lien : ${links.facebook}`,
linkedin: 
`Nom : Rowan Razanajatovo
Lien : ${links.linkedin}`,
chessCom: 
`Nom : RowanRaza
Lien : ${links.chessCom}`,
github: 
`Nom : RowanRaza
Lien : ${links.github}`,
email: 
`razanajatovo.rowan@gmail.com`
}


export function ContactScreen() : React.JSX.Element {
    const openLink = (url :  string) => {
        Linking.openURL(url)
    }
    
    return(
        <SafeAreaView>
            <ScrollView>
            <Section 
                title="Facebook"    
                desc={descs.facebook}
                onPress={() => openLink(links.facebook)}
            />
            <Section 
                title="Linkedin"    
                desc={descs.linkedin}
                onPress={() => openLink(links.linkedin)}
            />
            <Section 
                title="Chess.com"    
                desc={descs.chessCom}
                onPress={() => openLink(links.chessCom)}
            />
            <Section 
                title="Github"    
                desc={descs.github}
                onPress={() => openLink(links.github)}
            />
            <Section 
                title="E-mail"    
                desc={descs.email}
            />
            </ScrollView>
        </SafeAreaView>
    )
}