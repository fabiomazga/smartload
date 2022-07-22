import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function Frequency() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.carga}>CARGA EXTERNA</Text>
                <Text style={estilos.escolher}>ESCOLHER</Text>
                <Text style={estilos.frequencia}>FREQUENCIA</Text>
                <Text style={estilos.insira}>Insira uma frequência de coleta de</Text>
                <Text style={estilos.dados}>dados em hertz, entre 200 e 500</Text>
                <Text style={estilos.hifens}>- -</Text>
                <Text style={estilos.hz}>hz</Text>
                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Aplicar frequência</Text>

                </TouchableOpacity>
            </View>
        </>
    );

}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",
        justifyContent: "flex-end", 
        alignItems: "flex-end",     
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#000000",
        height: "100%"       
    },
    carga: {
        color: "#5FD068",
        fontSize: 20,
        paddingVertical: 32,
        marginRight: 5,        
        marginLeft: 15,
        marginBottom: -25,
        fontWeight: "bold"
    },
    escolher: {
        color: "#FFFFFF",
        fontSize: 36,
        paddingHorizontal: 5,
        paddingVertical: 1,
        marginLeft: 15,
        fontWeight: "bold"
    },
    frequencia: {
        color: "#FFFFFF",
        fontSize: 36,
        paddingHorizontal: 5,        
        marginLeft: 15,
        fontWeight: "bold"
    },
    insira: {
        color: "#FFFFFF",
        fontSize: 16,
        paddingHorizontal: 5,        
        marginLeft: 15,
        paddingTop: 15
    },
    dados: {
        color: "#FFFFFF",
        fontSize: 16,
        paddingHorizontal: 5,        
        marginLeft: 15
    },
    hifens: {
        color: "#CFD2CF",
        fontSize: 50,
        paddingHorizontal: 140,        
        marginLeft: 15,
        fontWeight: "bold",
        paddingTop: 80
    },
    hz: {
        color: "#CFD2CF",
        fontSize: 40,
        paddingHorizontal: 140,        
        marginLeft: 15
    },
    botao: {
        color: "#100F0F",
        backgroundColor: "#5FD068",
        borderRadius: 15,
        padding: 18,
        width: "80%", 
        marginRight: 32,
        marginTop: 200     
    },
    textoBotao: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    }

});