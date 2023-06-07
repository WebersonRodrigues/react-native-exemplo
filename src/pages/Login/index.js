import React, { useState } from "react";
import {Text, StyleSheet, View, Alert} from "react-native" 
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container , MeuText } from "../../styles/style-geral";

// Dados corretos... 
const usuario = {
    email: "admin@admin",
    senha: "123"
}

// Todo componente no react native é um função ou uma classe
function Login ({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = () =>{

        if(!email || !senha){
            Alert.alert(`O e-mail e senha devem ser preenchidos.`);

        }else if(email !== usuario.email || senha !== usuario.senha){
            Alert.alert(`O e-mail ou a senha estão incorretos.`); 
        }
        else{
            navigation.navigate('Home');
        }


        // 1° Obter email e senha e verificar se foram informados
            // 1.1 se não tiver, mandar mensagem ao usuario
        // 2° Verificar se esses dados existe na api, no backend.

        // é aqui que vou tentar autenticar o usuario e fazer ele ir para as proximas telas.

        // let email = "fulano@gmail.com";

        // Navegando para a pagina de Home passando parametros
        // navigation.navigate('Home',{email, doritos: "Gosto muito!!!!!"});

    }

    // const salvar = () =>{
    //     Alert.alert("Aqui vou Salvar no sistema");
    // }

    // const adicionar = () =>{
    //     Alert.alert("Aqui vou Adicionar no sistema");
    // }

    return (
        <Container style={style.boxLogin}>
            <MeuText fontSize= {60} style={style.titulo}>Login</MeuText>

            <MeuInput 
                label="E-mail"
                placeHolder="exemplo@exemplo.com"
                comMascara={false}
                setValor= {setEmail}
            ></MeuInput>

            <MeuInput 
                label="Senha"
                placeHolder="123456"
                comMascara={true}
                setValor= {setSenha}
            ></MeuInput>

            <View style={style.boxRecuperarSenha}>
                <Text style={style.recuperarSenha}>Recuperar senha</Text>
            </View>

            <SuperButton
            value={"Entrar"}
            acao={logar}
            ></SuperButton>

           {/* <SuperButton
            value={"Salvar"}
            acao={salvar}
            >
            </SuperButton>

            <SuperButton
            value={"Adicionar"}
            acao={adicionar}
            >
            </SuperButton> */}


        </Container>
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
        // color: '#FF5722',
        // fontSize:60,
        fontWeight: '700',
        textAlign: "center",
        marginBottom: 15
    },
    // Será reponsavel por alinhar o texto.
    boxRecuperarSenha:{
        width:300,
        justifyContent: "flex-end",
        textAlign: "right",
    },
    // Pela estilização da cor e do tamanho
    recuperarSenha:{
        color: '#FF5722',
    }
});

export default Login;