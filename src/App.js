import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme} mode={mode}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setMode={setMode} />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
