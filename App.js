import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StatusBar, SafeAreaView } from 'react-native';
import Menu from './src/telas/Menu';
import About from "./src/telas/About";
import Login from "./src/telas/Login";
import RegisterAthelete from "./src/telas/RegisterAthlete";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Menu" component={Menu}/>
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Registrer Athlete" component={RegisterAthelete} />
        </Tab.Navigator>
        
      </NavigationContainer>      
      
    </SafeAreaView>
  );
}


