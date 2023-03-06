import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StatusBar, SafeAreaView } from 'react-native';
import Menu from './src/telas/Menu';
import About from "./src/telas/About";
import Login from "./src/telas/Login";
import RegisterAthelete from "./src/telas/RegisterAthlete";
import Frequency from "./src/telas/Frequency";
import LoadingAthlete from "./src/telas/LoadingAthlete";
import ExternalWeight from "./src/telas/ExternalWeight";
import VerticalJump from "./src/telas/VerticalJumps";
import WriteComment from "./src/telas/WriteComment";
import Save from "./src/telas/Save";
import GraphicTable from "./src/telas/GraphicTable";
import GraphicJump from "./src/telas/GraphicJump";

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
          <Tab.Screen name="Loading Athlete" component={LoadingAthlete} />
          <Tab.Screen name="External Weight" component={ExternalWeight} />
          <Tab.Screen name="Vertical Jump" component={VerticalJump} />
          <Tab.Screen name="Write Comment" component={WriteComment} /> 
          <Tab.Screen name="Save" component={Save} />
          <Tab.Screen name="Graphic Table" component={GraphicTable} />
          <Tab.Screen name="Graphic Jump" component={GraphicJump} />
        </Tab.Navigator>         
      </NavigationContainer>      
      
    </SafeAreaView>
  );
}


