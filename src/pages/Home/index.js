import React from "react";
import { Text } from "react-native";

import { Container } from "../../styles/style-geral";


export default function Home({route}){
    return (
        <Container>
            <Text>Sou a pagina Home</Text>
            <Text>{route.params.email}</Text>
            <Text>{route.params.doritos}</Text>
        </Container>
    )
}