import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Save() {
    return (
        <>
            <View style={estilos.main}>
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
        height: "100%",        
    },   
    botao: {
        color: "#100F0F",
        backgroundColor: "#5FD068",
        padding: 18,
        textAlign: "center",
        marginHorizontal: 15,
        marginTop: "90%"
    },
    textoBotao: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }

});