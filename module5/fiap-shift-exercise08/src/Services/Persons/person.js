import api from "../Common/api"  // import api.JS

const getPersons = () => api.get("/persons/getPersons/"); // Fazer uma CONEXAO GET

const exportedObject = { // Exportar
    getPersons,
};
export default exportedObject;