import { ColorModeContext, useMode } from './theme';
import { useState } from 'react';
import{CssBaseline, ThemeProvider} from "@mui/material"
import {Routes,Route} from "react-router-dom"
import Topbar from "./scenes/global/Topbar"
import Dashboard from "./scenes/deshboard"
import Sidebars from "./scenes/global/Sidebar"
import Team from "./scenes/team"
import Invoice from "./scenes/invoice"
import Contacts from "./scenes/contacts"
import Bar from "./scenes/Bar"
import Form from "./scenes/form"
import Line from "./scenes/line"
import Pie from "./scenes/Pie"
import FAQ from "./scenes/faq"
import Geography from "./scenes/geography"
import Calendar from "./scenes/calendar"
// import ProgressCircle from './components/ProgressCircle';



function App() {

  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);


  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app'>
        <Sidebars isSidebar={isSidebar}/>
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar}/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/invoices" element={<Invoice/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/line" element={<Line/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/geography" element={<Geography/>}/>
          <Route path="/calendar" element={<Calendar/>}/> 
          {/* <Route path='/progresscircle' element={<ProgressCircle/>}/> */}
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider> 
  );
}

export default App;
