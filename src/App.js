
import BottomBar from "./components/CoffeDay/index";
import CleaningDay from "./components/CleaningDay/index";
import { CalendarContainer, SortContainer, Content } from "./components/style"
import Calendar from "./components/Calendar/index";
import React, { useState } from "react";
import Toggler from "./components/DarkModeBtn";
import { darkTheme, lightTheme } from "./components/style"

import { ThemeProvider } from "styled-components";



function App() {
    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        if (theme === 'dark')
            setTheme('light')
        else
            setTheme('dark')
    }

    const [participantPairs, setparticipantPairs] = useState([]);

    const handlePairsGenerated = (pairs) => {
        setparticipantPairs(pairs);
        // alert(`Pares gerados: ${pairs}`);
    }

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <Content>
                    <SortContainer>
                        <Toggler onToggle={toggleTheme} />
                        <CleaningDay onPairsGenerated={handlePairsGenerated}/>
                    </SortContainer>
                    <CalendarContainer>
                        <Calendar participantPairs={participantPairs}/>
                        <BottomBar />
                    </CalendarContainer>
                </Content>
            </>
        </ThemeProvider>
    )
}

export default App;
