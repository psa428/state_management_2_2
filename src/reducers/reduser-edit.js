//  Начальное состояние
export const initialState = {};
export const reducerEdit = (state=initialState, action) => {

       
      const { type, payload } = action;
    console.log('in reducerEdit');
    //  Формирование нового state
  
    switch (type) {
      case 'ADD_RECORD':{
        console.log(`In reducerEdit ADD_RECORD`);
        return state;
        
      }

     
    default: {
       console.log('in reducerEdit default');
       
        return state;  
    
    }
  }
};  