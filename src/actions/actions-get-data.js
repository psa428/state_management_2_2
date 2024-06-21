//  Загрузка данных в состояние
export const getData = () => {
    console.log(`In getData`);
    
    return (dispatch) => {
        return fetchData().then ((loadedRecords) => {
            
            dispatch({
                type: 'LOAD_DATA',
                payload: loadedRecords
            })
        })
    }
};    

export const fetchData = () => {
    console.log(`in fetchData()`);
    return fetch('http://localhost:3005/records')
                .then((loadedData) => loadedData.json())
                .then((loadedRecords) => {
                    console.log(`loadedRecords = ${loadedRecords[1]. title}`);
                     return loadedRecords;
                })
                
    };
    

