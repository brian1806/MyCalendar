
import { CoffeDay, Day, Tittle, DayOfWeek, Segunda, Terça, Quarta, Quinta, Sexta, Names } from "./styles"
import React from "react";

function BottomBar() {

    return (

        <CoffeDay>
            <Tittle>Dia do Café</Tittle>
            <DayOfWeek>
                <Segunda><Day>Seg</Day><br /><Names> Nome1 e</Names><Names>Nome2 </Names>
                </Segunda>
                <Terça><Day>Ter</Day><br /><Names> Nome1 e</Names><Names>Nome2 </Names>
                </Terça>
                <Quarta><Day>Qua</Day><br /><Names> Nome1 e</Names><Names>Nome2 </Names>
                </Quarta>
                <Quinta><Day>Qui</Day><br /><Names> Nome1 e</Names><Names>Nome2 </Names>
                </Quinta>
                <Sexta><Day>Sex</Day><br /><Names> Nome1 e</Names><Names>Nome2 </Names>
                </Sexta>
            </DayOfWeek>
        </CoffeDay>

    )
}

export default BottomBar;