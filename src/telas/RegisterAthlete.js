import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function RegisterAthelete() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.registrer}>RegisterAthelete</Text>
                <Text style={estilos.name}>Name:</Text>
            </View>
        </>
    );

}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",      
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#000000",
        height: "100%"       
    },
    registrer: {
        color: "#5FD068",
        fontSize: 24,
        paddingHorizontal: 5,
    },
    name: {
        color: "#5FD068",
        fontSize: 22,
        paddingHorizontal: 5,
    }

});