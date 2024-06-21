//  Нчальное состояние
export const initialState = {
  "field":    [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
  ],
  "isGameEnded":  false,
  "isDraw":   false,
  "currentPlayer":    'X'
}; 


export const reducerEdit = (state=initialState, action) => {

       
      const { type, payload } = action;
    console.log('in reducerEdit');
    //  Формирование нового state
  
    switch (type) {
      case 'ADD_RECORD':{
        console.log(`In reducerEdit ADD_RECORD`);
        return state;
        break;
      }

     
    default: {
       console.log('in reducerEdit default');
        return state;  
    
    }
  }
};  