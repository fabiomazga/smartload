import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function GraphicTable() {
    return(
        <>
            <View style={estilos.main}> 
                <Text style={estilos.gratable}>Graphic</Text>                
            </View>

            <View style={estilos.main}>
                <Text style={estilos.gratable}>Table</Text>               
            </View> 
        </>
    )
    
}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",       
        backgroundColor: "#000000",
        height: "50%",
        
    },
    gratable: {
        color: "#3D8361",
        fontSize: 36,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "40%"            
    },   
    
});