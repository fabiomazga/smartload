import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Menu() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.menu}>Menu principal</Text>
            </View>          
        </>
    );

}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",      
        paddingVertical: 20,
        paddingHorizontal: 80,
        backgroundColor: "#000000",
        height: "100%"       
    },

    menu: {
        color: "#5FD068",
        fontSize: 32        
    }

});