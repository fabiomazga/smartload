import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StatusBar, SafeAreaView } from 'react-native';
import Menu from './src/telas/Menu';
import About from "./src/telas/About";
import Login from "./src/telas/Login";
import RegisterAthelete from "./src/telas/RegisterAthlete";
import Frequency from "./src/telas/Frequency";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />

      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Menu" component={Menu}/>
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Registrer Athlete" component={RegisterAthelete} />
          <Tab.Screen name="Select Frequency" component={Frequency} />
        </Tab.Navigator>        
      </NavigationContainer>      
      
    </SafeAreaView>
  );
}


