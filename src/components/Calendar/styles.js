import styled, { css } from "styled-components"

//Pai no Calendar
export const Frame = styled.div`
  height: 75%; 
  border-right: 1px solid #747474;
 
`;

//Próprio Header
export const Header = styled.div`
  /* font-weight: bold; */
  height: 4%;
  align-items: center;
  display: flex;
  background-color: #B73625;
  font-family: 'Montserrat', sans-serif;
`;

//Nomes dos meses
export const MonthsYear = styled.div`
  color: white;
  min-width: 130px;
  max-width: 130px;
  cursor: pointer;
  text-align: center;
`;

//Body atras da grade
export const Body = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-wrap: wrap;
`;
export const Button = styled.div`
  cursor: pointer;
  color: white;
  transition: color 0.5s ease;
  &:hover {
    color: #1B1B1B; /* Altere para a cor desejada ao passar o mouse */
  }
  width: 20px;
`;

//Quadrados da Semana DOM, SEG, TER...SAB
export const DayOfWeek = styled.div`
  width: 14.09%;
  height: 14.1%;
  color: ${(props) => props.theme.tittle};
  border:1px solid #747474;
  font-family: 'Montserrat', sans-serif;
`;

// Quadrados do Mês
export const Day = styled.div`
  width: 14.09%;
  height: 14.10%;
  display: flex;
  align-items: end;
  justify-content: end;
  

  color: ${(props) => props.theme.tittle};
  border: 1px solid #747474;
  font-family: 'Montserrat', sans-serif;
  ${props =>
    props.isToday &&
    css`
      border: 1px solid #B73625;
    `}
    @media (max-width: 320px) {
    width : 13.6vw;
  }
`;

//Container das duplas
export const DoublesDiv = styled.div`
  margin: 5px auto auto 12px;
  display: flex;
  flex-direction: column;
`;

//Estilo das duplas
export const SortedPair = styled.span`
  font-size: 15px ;
`; 

//Estilo PopUp
export const PopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  color: ${(props) => props.theme.TxtPopUp};;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.bgPopUp};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 999;
  & > div {
    text-align: center;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;

  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;

  }

  button {
    border: none;
    background-color: #B73625;
    color: white;
    padding: 10px 20px;
    margin-top: 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }

  button:hover {
    background-color: #a2301d;
  }
`;

export const DayNumber = styled.span`
  margin: -30%;
`;

export const H2PopUp = styled.h2`
  padding-bottom: 30px;
`;