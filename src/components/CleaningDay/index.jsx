import React, { useState } from "react";
import {
  Limpeza, MainTittle, DrawContainer, InName, ContainerInputTxt,
  TxtInp, ContainerButtonAdd, ContentButtonAdd, ListPartic, ContainerButtonSort,
  SortButton, ContainerList, List, RemoveButton, ScrollableContainerList
} from "./styles";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function CleaningDay({ onPairsGenerated }) {
  //O motivo de envolver participants e setParticipants entre colchetes é para fazer a atribuição dos valores retornados pela função useState de forma mais compacta e legível
  const [participants, setParticipants] = useState([]);//useState([]) aqui diz que o estado nao ta definido, mas vai ser, quando setPartipants for definido
  const [participantName, setParticipantName] = useState("");//aqui a mesma coisa da linha acima useState("") vai ser definido no setParticipantName

  const handleAddParticipant = () => {
    if (participantName.trim() !== "") {//se participantName estiver armazenado um valor então vai ser desigual à "undefined" e isso vai fazer a expressão ser True
      setParticipants([...participants, participantName]);//Sendo True vai criar um novo array que consiste em todos os elementos do array participants (espalhados usando o operador spread ...) seguidos pelo novo participante participantName.
      setParticipantName("");//vai voltar a função com a "undefined" para poder inserir um novo nome em setParticipants
    }
  };

  const handleRemoveParticipant = (index) => {//arrow function que no parâmetro diz o indice do participante que será removido no array
    const updatedParticipants = [...participants];//criando uma cópia do array participants usando o operador spread (...)
    updatedParticipants.splice(index, 1);//remover um elemento do array updatedParticipants,splice() modifica o array original, removendo ou substituindo elementos O segundo parâmetro 1 indica que queremos remover apenas um elemento a partir do índice especificado.
    setParticipants(updatedParticipants);//atualizando o array depois da modificação.
  };

  const handleSortParticipants = () => {
    if (participants.length < 2) {
      alert("É necessário pelo menos dois participantes para formar duplas")
    }
    const shuffledParticipants = shuffleArray(participants);
    const newPairs = [];
  
    for (let i = 0; i < shuffledParticipants.length; i += 2) {
      if (i === shuffledParticipants.length - 1) {
        newPairs.push([shuffledParticipants[i]]);
      } else {
        newPairs.push([shuffledParticipants[i], shuffledParticipants[i + 1]]);
      }
    }

    onPairsGenerated(newPairs);
  }

  return (
    <Limpeza>
      <MainTittle>Calendário de Limpeza</MainTittle>
      <DrawContainer>
        <InName for="nome">Insira o nome</InName>
        <ContainerInputTxt>
          <TxtInp
            type="text"
            name="name"
            id="nome"
            placeholder="Ex.: Brian"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddParticipant();
              }
            }}
          />
        </ContainerInputTxt>
        <ContainerButtonAdd>
          <ContentButtonAdd onClick={handleAddParticipant}>Adicionar</ContentButtonAdd>
        </ContainerButtonAdd>
      </DrawContainer>
      <ContainerButtonSort>
        <ListPartic>Lista de participantes</ListPartic>
        <SortButton onClick={handleSortParticipants}>Sortear</SortButton>
      </ContainerButtonSort>
      <ContainerList>
        <ScrollableContainerList>
          {participants.map((participant, index) => (
            <List key={index}>
              {/* <span>&#8226;</span> */}
              {participant}
              <RemoveButton onClick={() => handleRemoveParticipant(index)}>X</RemoveButton>
            </List>
          ))}
        </ScrollableContainerList>
      </ContainerList>
    </Limpeza>
  );
}

export default CleaningDay;
