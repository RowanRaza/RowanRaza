import React from "react";
import { Dimensions, StatusBar} from "react-native";import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BioScreen } from "./screens/BioScreen";
import { HobbyScreen } from "./screens/HobbyScreen";
import { ContactScreen } from "./screens/ContactScreen";
import { ComingSoon } from "./screens/ComingSoon";
;
const {fontScale} = Dimensions.get('screen')

export default function App() : React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#8b6a57"}/>
      <RootStack/>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Accueil" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8b6a57',
        },
        headerTitleStyle: {
          fontSize: 18 * fontScale,
          color: "#fff"
        },
        contentStyle: {
          backgroundColor: '#fff'
        },
      }}
    >
      <Stack.Screen name="Accueil" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Biographie" component={BioScreen}/>
      <Stack.Screen name="Passe-temps" component={HobbyScreen}/>
      <Stack.Screen name="Contacts" component={ContactScreen}/>
      <Stack.Screen name="Coming soon" component={ComingSoon}/>
    </Stack.Navigator>
  )
}