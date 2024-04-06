import React, { useState, useEffect } from "react";
import { Frame, Header, Button, Body, Day, MonthsYear, DayOfWeek, DoublesDiv, SortedPair, PopUp, DayNumber, H2PopUp} from "./styles";

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_THE_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function Calendar({ participantPairs }) {
  // Estado para armazenar a data atual e o início do dia
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  // Estados para controlar os pares atribuídos, o conteúdo do popup e se o popup deve ser exibido
  const [assignedPairs, setAssignedPairs] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState("");

  // Efeito para atualizar os estados quando a data ou a lista de pares de participantes mudar
  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    assignDoubles();
    console.log("Pares atribuídos:", assignedPairs);
  }, [date, participantPairs])

  // Função para obter o dia de início do mês
  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  // Função para verificar se o ano é bissexto
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS; // Arrays de dias dependendo se o ano é bissexto ou não

  // Função para encontrar todas as sextas-feiras do ano
  function findFridays() {
    const fridays = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = new Date().getFullYear();

    // Iterar sobre os meses do ano atual
    for (let month = currentMonth; month < 12; month++) {
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate();

      // Loop pelos dias do mês, começando a partir do startDay
      for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(currentYear, month, day);
        if (currentDay.getDay() === 5) {
          fridays.push({ day, month, year: currentYear });
        }
      }
    }

    return fridays;
  }

  // Função para atribuir duplas às sextas-feiras
  function assignDoubles() {
    const fridays = findFridays();
    const assignedPairsCopy = {};
    let pairIndex = 0;

    fridays.forEach(({ day, month, year }) => {
      const fridayDate = new Date(year, month, day);

      if (pairIndex < participantPairs.length) {
        const pair = participantPairs[pairIndex];
        assignedPairsCopy[fridayDate.toISOString()] = pair;
        pairIndex++;
      } else {
        assignedPairsCopy[fridayDate.toISOString()] = null; // Define como null se não houver duplas disponíveis
      }
    });

    // Iterar sobre as sextas-feiras e imprimir aquelas que possuem duplas atribuídas
    Object.entries(assignedPairsCopy).forEach(([friday, pairs]) => {
      if (pairs) {
        console.log(`Mês: ${MONTHS[new Date(friday).getMonth()]}\n Sexta-feira dia ${new Date(friday).getDate()}\n Duplas: ${pairs}\n `);//Data: ${friday}
      }
    });

    setAssignedPairs(assignedPairsCopy);
  }

  // Função para lidar com o clique em uma sexta-feira
  function handlePopUpClick(day) {
    const clickedDate = new Date(year, month, day);
    const pair = assignedPairs[clickedDate.toISOString()];

    if (pair) {
      setPopUpContent(`Na Sexta-feira dia ${day} de ${MONTHS[month]}, a equipe designada para limpeza esta semana é composta por ${pair[0]} e ${pair[1]}. A tarefa de limpeza inclui varrer o chão e retirar o lixo em várias áreas, tais como a sala de Hardware, a sala principal, o corredor, a cozinha e o estoque.`);
      setShowPopUp(true);
    }
  }

  function handlePrevMonthClick() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
  }

  function handleNextMonthClick() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  }

  return (
    <Frame>
      <Header>
        <Button onClick={handlePrevMonthClick}><i className="bi bi-chevron-compact-left"></i></Button>
        <MonthsYear>
          {MONTHS[date.getMonth()]} {date.getFullYear()}
        </MonthsYear>
        <Button onClick={handleNextMonthClick}><i className="bi bi-chevron-compact-right"></i></Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((dayOfWeek, index) => (
          <DayOfWeek key={index}>
            <strong>{dayOfWeek}</strong>
          </DayOfWeek>
        ))}
        {Array.from({ length: 42 }, (_, index) => {
          const d = index - (startDay - 1);
          const isCurrentMonth = d > 0 && d <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
          const isFriday = isCurrentMonth && new Date(date.getFullYear(), date.getMonth(), d).getDay() === 5;
          const isToday = isCurrentMonth && d === today.getDate();

          return (
            <Day key={index}
              isToday={isToday && d === today.getDate() && month === today.getMonth() && year === today.getFullYear()}
              isSelected={isCurrentMonth && d === today.getDate()}
              onClick={() => handlePopUpClick(d)}
            >
              {isCurrentMonth && (
                <>
                  {isFriday && assignedPairs[new Date(date.getFullYear(), date.getMonth(), d).toISOString()] && (
                    <DoublesDiv>
                      <SortedPair>{assignedPairs[new Date(date.getFullYear(), date.getMonth(), d).toISOString()][0]}</SortedPair>
                      <SortedPair>{assignedPairs[new Date(date.getFullYear(), date.getMonth(), d).toISOString()][1]}</SortedPair>
                    </DoublesDiv>
                  )}
                  <div>
                    <DayNumber>{isCurrentMonth ? d : ''}</DayNumber>
                  </div>
                </>
              )}
            </Day>
          );
        })}
      </Body>
      {showPopUp && (
        <PopUp>
          <div>
            <H2PopUp>Dupla designada para esta semana😎</H2PopUp>
            <p>{popUpContent}</p>
            <button onClick={() => setShowPopUp(false)}>Fechar</button>
          </div>
        </PopUp>
      )}
    </Frame>
  );
}
