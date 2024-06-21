//  Нчальное состояние
export const initialState = {
    "field":    [
        ['', '', ''],
        ['', 'Y', ''],
        ['', '', '']
    ],
    "isGameEnded":  false,
    "isDraw":   false,
    "currentPlayer":    'X'
}; 

export const reducerBeg = (state = initialState, action) => {

       
      const { type, payload } = action;
    console.log('in reducerBeg');
    console.log(`payload = ${payload}`);
    //  Формирование нового state
  
    switch (type) {
      case 'LOAD_DATA':{
        console.log(`In reducer_beg LOAD_DATA payload = ${payload}`);
        return state; 
      }

     
    default: {
       console.log('in reducerBeg default');
        return state;  
    
    }
  }
};  