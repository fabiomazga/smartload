import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function GraphicJump() {
    return (
        <>
            <View style={estilos.main}>
                <Text style={estilos.grafico}>Grafico de salto</Text>                
            </View>

            <View style={estilos.main}>
                <Text style={estilos.grafico}>Força, velocidade, potência</Text>                
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
    grafico: {
        color: "#FFFFFF",
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "40%"            
    }   
    
});