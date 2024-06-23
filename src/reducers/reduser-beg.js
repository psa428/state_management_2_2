 //Нчальное состояние
export const initialState = {
    "records":    [
      
    ],
    "isRefreshRecords":  false,
    "isUpdating":   false,
    "stat":    false
}; 

export const reducerBeg = (state=initialState, action) => {

       
      const { type, payload } = action;
    console.log(`in reducerBeg isUpdating= ${state.isUpdating}`);
   
    
   
      console.log(`payload = ${payload}`);
    
    //  Формирование нового state
  
    switch (type) {
      case 'LOAD_DATA':{
        console.log(`In reducer_beg LOAD_DATA payload = ${payload}`);
        console.log(`payload = ${payload[2].title}`);
        
        return {
          ...state,
          records: payload,
          isRefreshRecords:  false,
          isUpdating:   false,
          stat:    false
        }   
      }

     
    default: {
       console.log('in reducerBeg default');
        return state;  
    
    }
  }
};  