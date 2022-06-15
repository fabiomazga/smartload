import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.login}>Login field</Text>
            </View>
        </>
    );

}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",      
        paddingVertical: 10,
        paddingHorizontal: 100,
        backgroundColor: "#000000",
        height: "100%"       
    },

    login: {
        color: "#5FD068",
        fontSize: 32,
        paddingHorizontal: 7,
        paddingTop: 5
    }

});