import React from "react";
import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Home } from "./routes/home/home.component";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Work Sans, sans-serif",
        fontFamilyMonospace: "Work Sans, sans-serif",
        headings: { fontFamily: "Work Sans, sans-serif" }
      }}
    >
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
