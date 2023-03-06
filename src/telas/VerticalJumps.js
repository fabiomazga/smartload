import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function VerticalJump() {

    return (
        <>
            <View style={estilos.main}>
                <Text style={estilos.vertical}>Vertical Jumps</Text>                
            </View>

            <View style={estilos.main}>
                <Text style={estilos.vertical}>Load Lift</Text>                
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
    vertical: {
        color: "#3D8361",
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "40%"
            
    }    
});