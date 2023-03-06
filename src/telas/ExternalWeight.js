import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ExternalWeight() {

    return(
        <>
            <View style={estilos.main}> 
                <Text style={estilos.carga}>CARGA EXTERNA</Text>
                <Text style={estilos.insira}>Insira sua carga externa</Text>
            </View>

            <View style={estilos.main}>
                <Text style={estilos.carga}>CARGA INTERNA</Text>
                <Text style={estilos.insira}>Insira sua carga interna</Text>
            </View>        
        </>
    );
}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",       
        backgroundColor: "#000000",
        height: "50%",
        
    },
    carga: {
        color: "#3D8361",
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "40%"
            
    },
    insira: {
        color: "#B7C4CF",
        textAlign: "center",
        fontSize: 20,
    }
    
});