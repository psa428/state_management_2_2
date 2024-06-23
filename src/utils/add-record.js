import { getData } from "../actions/actions-get-data";


export const addRecord = (title, dispatch) => {
    
    let  newRecord = title;
    if (!newRecord) 
        return;
    let isCreating = true;
    
    fetchAddRecord(newRecord).then(() => {
        console.log(`in addRecord dispatch`);
            dispatch(getData());
            
            })
        }




export  async function fetchAddRecord (newRecord) {   
    fetch('http://localhost:3005/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
            title: newRecord,
            completed: false,
        }),
    })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
           
        
        })
           
       
       
};

   