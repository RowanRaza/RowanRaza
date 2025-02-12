import { Text } from "@react-navigation/elements";
import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Section } from "../components/Section";

export function BioScreen() : React.JSX.Element {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <Image 
                    source={require('../assets/RowanRaza.png')}
                    style={styles.img}    
                />
                <Section 
                    title="Introduction"
                    desc="Je m'appelle RAZANAJATOVO FLEURYS Tiana Hervé Rowan, et je suis développeur. Né le 06 février 2006, dans le 3e arrondissement à Avaradoha, je suis passionné par developpement. Cette passion m'a guidé tout au long de mon parcours et continue de m’inspirer dans tout ce que je fais."
                />
                <Section
                    title="Parcours académique et professionnel"
                    desc="Mon aventure professionnelle a commencé par l'enseignement supérieur à l'université. J’ai eu l’opportunité de me former en génie logiciel à l'University of Science and Technology - Indian Ocean, et à l'Ecole Supérieure des Technologies de l'Information suivant le parcour IDEV"
                />
                <Section
                    title="Passions et intérêts personnels"
                    desc="En dehors de ma carrière professionnelle, je suis profondément passionné par les jeux vidéos et le sport. Cela m’aide à garder un équilibre sain et m’inspire souvent dans mon travail. Ces passions sont également un moyen pour moi d’élargir mes horizons, de découvrir de nouvelles idées et d’entretenir une curiosité constante pour le monde qui m’entoure.
                    Je crois fermement que la discipline est essentielle, non seulement dans la vie professionnelle, mais aussi dans la vie personnelle. Cet engagement dans mes passions me permet de rester centré et motivé. Découvrez en plus sur la section Passe-temps"
                />
                <Section
                    title="Valeurs et philosophie de vie"
                    desc="Mon approche de la vie repose sur des valeurs fondamentales telles que l'intégrité, la persévérance, travail en équipe, curiosité. Je considère que chaque défi est une opportunité de croissance et je m’efforce toujours de donner le meilleur de moi-même, que ce soit dans mes projets professionnels ou mes relations personnelles.
                    Je suis convaincu que la collaboration est la clé du succès et que chaque expérience, même les plus difficiles, apporte des enseignements précieux."
                />
                <Section
                    title="Objectifs et avenir"
                    desc="Aujourd'hui, je continue d’évoluer en explorant de nouvelles opportunités et en m’efforçant de me perfectionner constamment. Mon objectif à long terme est de devenir un leader dans mon domaine.
                    Je crois qu'il est important de ne jamais cesser d'apprendre et de rester ouvert aux nouvelles idées et défis. C’est ce qui me permet de rester passionné et motivé par ce que je fais chaque jour."
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        margin: '10%',
        width: '50%',
        height: 'auto',
        aspectRatio: 1
    },
    scrollview: {
        alignItems: 'center',
    }
})