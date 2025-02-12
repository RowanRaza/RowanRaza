import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
import { Profile } from "../components/Profile";
import { Section } from "../components/Section";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

export const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <Profile/>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Bienvenu sur "RowanRaza" !</Text>
        </View>
        <Section 
            onPress={() => navigation.navigate('Biographie')}
            title="Biographie"
            desc="Jeune développeur malagasy, né le 06 fevrier 2006..."
        />
        <Section 
            onPress={() => navigation.navigate('Coming soon')}
            title="Réalisations"
            desc="Regroupe certaines de mes réalisation personnelles et professionnelles"
        />
        <Section 
            onPress={() => navigation.navigate('Passe-temps')}
            title="Passe-temps"
            desc="Mes loisirs, mes passions, mes passe-temps, découvrez-les dans cette section"
        />
        <Section 
            onPress={() => navigation.navigate('Contacts')}
            title="Comptes et contact"
            desc="Jouez à des jeux en ligne avec moi, contacter moi sur un réseau professionnel,... cliquez ici !"
        />
        </ScrollView>
    </SafeAreaView>)
}

const {fontScale} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0
    },
    welcomeContainer : {
      height : 75,
      alignItems: 'center',
      justifyContent: 'center'
    },
    welcomeText: {
      fontSize: 18 * fontScale,
      fontWeight: 'bold'
    }
});