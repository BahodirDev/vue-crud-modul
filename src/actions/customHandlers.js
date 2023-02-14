export const converterToArray =(data)=>{
    let massiv = [];
    for (let key in data) {
        massiv.push({...data[key],_id:key,});
    }
    return massiv;
}