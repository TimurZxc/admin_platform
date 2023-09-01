import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar"
import { useState } from "react";
import ManageSources from "./scenes/manage/ManageSources"
import SourceInfo from "./scenes/info/SourceInfo"
// import Form from "./scenes/form/Form";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import './index.css'
import FullContent from "./scenes/full_content";
import Bar from "./scenes/bar";
import Dashboard from "./scenes/main";


function App() {

  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/> 
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/manage" element={<ManageSources/>}/>
              <Route path="/info" element={<SourceInfo/>}/>
              <Route path="/full" element={<FullContent/>}/>
              {/* <Route path="/form" element={<Form/>}/> */}
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/line" element={<Line />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
