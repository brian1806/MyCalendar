import styled from "styled-components";

//Uma Div do conteudo Dia do café
export const CoffeDay = styled.div`
    height: 25%;
    /* border-top: 1px solid #747474; */
    /* border-bottom: 1px solid #171717; */
`;
export const Day = styled.span`
    color: ${(props) => props.theme.tittle};
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    padding-top: 7px;
    margin-bottom: 22px;
`;
export const Tittle = styled.h3`
    color: ${(props) => props.theme.tittle};
    font-family: 'Montserrat', sans-serif;
    margin: 1%;
    padding-left: 1%;
    font-size: 23px;    
`;
export const DayOfWeek = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 80%;
`;

const workingDaysStyles =`
    width: 17%;
    height: 80%;
    background-color: ${(props) => props.theme.backgroundWeeks};
    display: inline-block;
    box-shadow: 0px 4px 4px 0px #00000040;
    text-align: center;
`;
export const Segunda = styled.div`
    background-color: ${(props) => props.theme.backgroundWeeks};
    ${workingDaysStyles}
    border-top: ${() => (new Date().getDay() === 1 ? "2px solid #B73625" : "none")}
`;
export const Terça = styled.div`
    background-color: ${(props) => props.theme.backgroundWeeks};
    ${workingDaysStyles}
    border-top: ${() => (new Date().getDay() === 2 ? "2px solid #B73625" : "none")};
`;
export const Quarta = styled.div`
    background-color: ${(props) => props.theme.backgroundWeeks};
    ${workingDaysStyles}
    border-top: ${() => (new Date().getDay() === 3 ? "2px solid #B73625" : "none")};
`;
export const Quinta = styled.div`
    background-color: ${(props) => props.theme.backgroundWeeks};
    ${workingDaysStyles}
    border-top: ${() => (new Date().getDay() === 4 ? "2px solid #B73625" : "none")};

`;
export const Sexta = styled.div`
    background-color: ${(props) => props.theme.backgroundWeeks};
    ${workingDaysStyles}
    border-top: ${() => (new Date().getDay() === 5 ? "2px solid #B73625" : "none")};
`;

export const Names = styled.span`
    /* background-color: ${(props) => props.theme.backgroundWeeks}; */
    /* border: none; */
    color: ${(props) => props.theme.tittle};
    margin-left: 5px;
    font-family: 'Montserrat', sans-serif;
`;