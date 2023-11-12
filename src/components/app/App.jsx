
import Header from '../Header/Header';
import GlobalContext from '../../share/context';
import Main from '../main/Main';
import { useEffect, useState } from 'react';

function App() {
  const [contextValue, setContextValue] = useState(false);  
  const [buttonValue, setButtonValue] = useState('Log In');

  const ifLocal = () => {
    if(localStorage.token){
      setButtonValue('Log Out');
      setContextValue(true);
    }
  }

  const isToken = () => {
    if(!contextValue){      
      setButtonValue('Log Out');
      localStorage.setItem('token', 'Your token');
      setContextValue(true);
    } else {      
      setButtonValue('Log In');
      localStorage.removeItem('token');
      setContextValue(false);
    }    
  }

  useEffect(() => {
    ifLocal();
  },[])
  
  return (
    <GlobalContext.Provider value={{contextValue, buttonValue, isToken}}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </GlobalContext.Provider>

  );
}

export default App;
