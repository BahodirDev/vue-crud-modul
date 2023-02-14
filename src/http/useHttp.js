import axios from "axios";
let url = "https://vue-app-69c65-default-rtdb.firebaseio.com"
export const getRequest = async (name) => {
    let { data } = await axios.get(url+"/"+name);
    return data;
}
// get by id
export const getRequestById = async (urrl,id) => {
    let { data } = await axios.get(url+"/"+urrl+"/"+id+".json");
    return data;
}

// update
export const putRequestById = async (urrl,id,post) => {
    let { data } = await axios.put(url+"/"+urrl+"/"+id+".json",post);
    return data;
}


// post request
export const postRequest = async (name,inform) => {
    let { data } = await axios.post(url+"/"+name,inform);
    return data;
}
// delete reques
export const deleteRequest = async (name,id) => {
    let { data } = await axios.delete(url+"/"+name+"/"+id+".json");
    return data;
}