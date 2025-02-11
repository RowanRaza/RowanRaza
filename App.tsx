import React from "react";
import { Dimensions, View, StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { Section } from "./components/Section";
import { Profile } from "./components/Profile";

const {fontScale} = Dimensions.get('screen');
export default function App() : React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Profile/>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Bienvenu sur "RowanRaza" !</Text>
        </View>
        <Section 
          onPress={() => console.log('bonjour')}
          title="Biographie"
          desc="Jeune développeur malagasy, né le 06 fevrier 2006..."
        />
        <Section 
          onPress={() => console.log('bonjour')}
          title="Réalisations"
          desc="Regroupe certaines de mes réalisation personnelles et professionnelles"
        />
        <Section 
          onPress={() => console.log('bonjour')}
          title="Passe-temps"
          desc="Mes loisirs, mes passions, mes passe-temps, découvrez-les dans cette section"
        />
        <Section 
          onPress={() => console.log('bonjour')}
          title="Comptes et contact"
          desc="Jouez à des jeux en ligne avec moi, contacter moi sur un réseau professionnel,... cliquez ici !"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

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
