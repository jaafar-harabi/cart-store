import { useState,createContext } from 'react';
import {Foot,Nav} from './components'
import {Product,ProductId} from './pages'
import {Routes,Route} from 'react-router-dom'




export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div id={theme}  >

        <Nav theme={theme} toggleTheme={toggleTheme}/>

        <Routes>
          <Route path='/' element={<Product theme={theme}/>} />
          <Route path='/facturation' element={ <ProductId theme={theme} /> }/>
        </Routes>
      
        
        <Foot theme={theme} />

      </div>
     

    </ThemeContext.Provider>
  
    

    
  );
}

export default App;
