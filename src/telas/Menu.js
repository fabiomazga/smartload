import { View, Text, StyleSheet } from "react-native";

export default function Menu() {

    return(
        <>
            <View style={estilos.main}>
                <Text style={estilos.login}>Login</Text>
            </View>          
        </>
    );

}

const estilos = StyleSheet.create({

    main: {  
        flexDirection: "column",      
        paddingVertical: 20,
        paddingHorizontal: 150,
        backgroundColor: "#000000",
        height: "100%"       
    },

    login: {
        color: "#5FD068",
        fontSize: 32
    }

});