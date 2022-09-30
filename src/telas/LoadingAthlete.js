import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function LoadingAthlete() {

    return(
        <>
            <View style={estilos.main}> 
                <Text style={estilos.loading}>Loading Athlete:</Text>
                <Text style={estilos.select}>Select Athlete`s Name:</Text>
                <View style={estilos.div}>
                    <Text style={estilos.name}>Insert name</Text>
                </View>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",      
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#000000",
        height: "100%"       
    },
    loading: {
        color: "#FFFFFF",
        fontSize: 26,
        textAlign: "center",
        marginTop: 12,        
        textDecorationLine: "underline"
    },
    select: {
        color: "#FFFFFF",
        fontSize: 26,
        textAlign: "center",
        marginTop: 42
    },
    div: {
        backgroundColor: "#FFFFFF",
        marginTop: 15,
        marginHorizontal: 8,
        height: "50%"       
    },
    name: {
        fontSize: 26
    }
});