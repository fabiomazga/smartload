import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function WriteComment() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.write}>Write Comment:</Text> 

                <View style={estilos.quadrado}></View>

                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Save</Text>
                </TouchableOpacity>

            </View>
        
        </>
    )
}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",       
        backgroundColor: "#000000",
        height: "100%"        
    },
    write: {
        textAlign: "center",
        color: "white",
        fontSize: 28,
        marginTop: 60,
        textDecorationLine: "underline"        
    },
    quadrado: {
        backgroundColor: "#FFFFFF",
        marginTop: 30,
        marginHorizontal: 15,
        height: "60%",        
    },
    botao: {
        color: "#100F0F",
        backgroundColor: "#5FD068",        
        padding: 18,
        textAlign: "center",
        marginHorizontal: 15,
        marginTop: 40       
    },
    textoBotao: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }
       
});