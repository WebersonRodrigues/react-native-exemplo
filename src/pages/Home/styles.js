import styled from "styled-components/native";

const ContainerPrincipal = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
`;

const FlatListProdutos = styled.FlatList`
/* Aqui coloco meu codigo */
`;

const ItemProduto = styled.Text`
    padding: 25px;
    margin: 10px;
    font-size: 20px;
    color: ${props => props.selecionado ? "white": "black"}
`;

const TouchProduto = styled.TouchableOpacity`
    background-color: ${props => props.selecionado ? "purple": "orange"};
    margin: 10px;
    text-align: center;
`;

const MinhaImagem = styled.Image`
width: 200px;
height:250px;
`;


export {
    ContainerPrincipal,
    FlatListProdutos,
    ItemProduto,
    TouchProduto,
    MinhaImagem
}
