import React from "react";
import {Text, StyleSheet, View} from "react-native" 
import MeuInput from "../../components/MeuInput";

// Todo componente no react native é um função ou uma classe
function Login (){
    return (
        <View style={style.boxLogin}>
            <Text style={style.titulo}>Login</Text>

            <MeuInput 
                label="E-mail"
                placeHolder="exemplo@exemplo.com"
            ></MeuInput>

            <MeuInput 
                label="Senha"
                placeHolder="123456"
            ></MeuInput>


        </View>
    );
}

const style = StyleSheet.create({
    boxLogin:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff' // branca em hexadecimal
    },
    titulo: {
        color: '#FF5722',
        fontSize:60,
        fontWeight: '700',
        textAlign: "center",
        marginBottom: 15
    }
});

export default Login;