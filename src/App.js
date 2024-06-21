import './App.css';
import { MainPage } from './components/main-page';
import { AppContext } from './context';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from './actions/actions-get-data';

function App() {
  const dispatch = useDispatch();

  
  const [title, setTitle] = useState("");
  const [refreshRecords, setRefreshRecords] = useState(false);
  const [ isUpdating, setIsUpdating] = useState(false);
  const [stat, setStat] = useState(false) ;

  const refreshRec = () => setRefreshRecords(!refreshRecords);

  const chkReducer = () => {
    console.log(`in chkReducer}`);

    dispatch(getData());
  };
  
  
  
    return (
      <AppContext.Provider value={{title, setTitle, refreshRecords, refreshRec, isUpdating, setIsUpdating, stat, setStat}}>
      <div>
        <MainPage />
        <button onClick={() => {
          console.log('Нажали на кнопку Проверить reducer ')
          chkReducer()
          
         }}>Проверим reducer</button>

      </div>
      </AppContext.Provider>
      

    )
}

export default App;
