import styled from "styled-components";

//Titulo Calendário de limpeza
export const MainTittle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 23px;
    line-height: 34.13px;
    width: 90%;
    height: 1%;
    color: ${(props) => props.theme.tittle};
    margin: 23% 3%;
    text-align: center;    
`;

//Texto insira o nome
export const InName = styled.label`
    width: 111px;
    height: 1%;
    color: ${(props) => props.theme.tittle};
    margin: 0 45% 2% 0;
    font-family: 'Roboto', sans-serif;
`;
//Container do Input Texto
export const ContainerInputTxt = styled.div`
    text-align: center;
`;
//Input Tipo texto
export const TxtInp = styled.input`
    width: 270px;
    height: 31px;
    border-radius: 5px; 
`;
//Container do Botão de adicionar
export const ContainerButtonAdd = styled.div`
    margin: 30px 0 100px 0;
`;
//Conteudo do Botão de adicionar
export const ContentButtonAdd = styled.button`
    border: none;
    width: 120px;
    height: 33px;
    border-radius: 5px;
    gap: 10px;
    background-color: #B73625;     
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 18.75px; 
    cursor: pointer;
    &:hover{
        opacity: .8;
    }
`;
//Texto Lista de participantes
export const ListPartic = styled.p`
    width: 175px;
    height: 20px;
    color: ${(props) => props.theme.tittle};
    padding-left: 53px;
    font-family: 'Roboto', sans-serif;
`;
//Container do Botão de sortear
export const ContainerButtonSort = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;
`;
//Botão de sortear
export const SortButton = styled.button`
    border: none;
    width: 85px;
    height: 26px;
    border-radius: 5px;
    margin-right: 30px;
    background-color: #B73625;     
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 15.23px; 
    cursor: pointer;
    margin-right: 50px;
    &:hover {
        opacity: .8;
    }
`;
//Todas as listas juntas
export const ContainerList = styled.ul`
    padding: 0;
    display: flex;  
    flex-direction: column;
    width: 94%;//355
    max-height: 27%;
`;

export const ScrollableContainerList = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: column;
    overflow-y: auto; 
    overflow-x: hidden;
     scrollbar-width: thin; 
     scrollbar-color: #B73625 transparent; 
     @media (max-width: 320px) {
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    } 
`;

//Lista de participantes
export const List = styled.li`
    color: ${(props) => props.theme.tittle};
    font-family: 'roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    margin-top: 3px;
    margin-left: 35px;
    display: flex;  
    justify-content: space-between;  
    text-align: center;
`;
//Uma Div do conteudo da parte de Limpeza
export const Limpeza = styled.div`

`;
//Uma Div do conteudo Dia do café
export const CoffeDay = styled.div`
    
`;
export const DrawContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;
export const RemoveButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
    margin-right: 15px; //55 
    color: ${(props) => props.theme.tittle};
    &:hover {
        opacity: .3;
    }
`;