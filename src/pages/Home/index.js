import React from "react";
import { Text, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";

import { Container } from "../../styles/style-geral";
import { 
    ContainerPrincipal,
    FlatListProdutos,
    ItemProduto,
    TouchProduto,
    MinhaImagem
  } from "./styles";

// import imagemBunequinho from "../../assets/male.jpg" ;
// const imgURI = Image.resolveAssetSource(imagemBunequinho).uri;



export default function Home({route}){

    const [produtos, setProdutos] = useState([
        {id:1, nome: "Camisa do Brasil"},
        {id:2, nome: "Camisa da Argentina"},
        {id:3, nome: "Camisa do Alemanha"},
        {id:4, nome: "Camisa da Espanha"},
        {id:5, nome: "Camisa do Uruguai"},
        {id:6, nome: "Camisa da França"},
        {id:7, nome: "Camisa da Holanda"},
        {id:8, nome: "Camisa de Portugal"},
        {id:9, nome: "Camisa da Africa do Sul"},
    ]);

    const [selecionado, setSelecionado] = useState(null);


    const renderItem = ({item}) => {
        return (
            <TouchProduto
                selecionado ={(item.id === selecionado)}
                onPress={() => setSelecionado(item.id)}>
                <ItemProduto 
                    selecionado ={(item.id === selecionado)}>
                    {item.nome}
                </ItemProduto>
            </TouchProduto>
        );
    }

    return (
        <ContainerPrincipal>
            {/* <Text>Sou a pagina Home</Text>
            <Text>{route.params.email}</Text>
            <Text>{route.params.doritos}</Text> */}

            {/* Hoje vamos aprender a utilziar o flatlist */}

            <MinhaImagem onPress  source={require("../../assets/male.jpg")}></MinhaImagem>

            {/* <MinhaImagem source={{uri: imgURI}}></MinhaImagem> */}

            <FlatListProdutos 
                data={produtos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            >
            </FlatListProdutos>
        </ContainerPrincipal>
    )
}