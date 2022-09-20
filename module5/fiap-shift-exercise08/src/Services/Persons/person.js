import api from "../APIs/Common/api"  

const getPersonsAPI = () => api.get("/persons/getPersons"); 

const exportedObject = { 
    getPersonsAPI,
};

export default exportedObject;