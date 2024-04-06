//================================================================================================== 
//                                        ARQUIVO DA TELA
//==================================================================================================

import styled from "styled-components";

export const darkTheme = {
    body: "#171717",
    tittle: "#fff",
    backgroundWeeks: "#1B1B1B",
    select: "#1B1B1B",
    bgPopUp: "#272727",
    TxtPopUp: "#fff"

}

export const lightTheme = {
    body: "#ffff",
    tittle: "#1c1c1c",
    select: "#D9D9D9",
    bgPopUp: "#f5f5f5",
    TxtPopUp: "#1c1c1c",
    backgroundWeeks: "#f7f7f7"

}

//Div dos 3 documentos juntos
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 425px) {
        flex-direction: column;
        height: 200vh;
        width: 100vw;
    }
    overflow: hidden;
`;
//Div para a parte esquerda do APP
export const SortContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.body};
    width: 25vw;
    height: 100vh;
    border-right: 1px solid #747474;
    
    @media (max-width: 425px) {
        width: 100vw;
        height: 100vh;
    }
`;

//Div para a parte direita do APP
export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: 100vh;
    background-color: ${(props) => props.theme.body};

    @media (max-width: 425px) {
        height: 100vh;
        width: 100vw;
    }  
`;

