import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function About() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.titulo}>Tech4Fight Sports Technology.</Text>

                <Text style={estilos.descricao}>
                    SmartLoad - Tech4Fight Sports Technology.
                    Um aplicativo que roda no android e ios, para maior performace
                    de atletas e de controle dos profissionais da educacao fisica.
                </Text>

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

    titulo: {
        color: "#5FD068",
        fontSize: 24,
        paddingHorizontal: 5,
    },

    descricao: {
        color: "#5FD068",
        fontSize: 20,
        paddingTop: 25,
        paddingHorizontal: 15
    }
});