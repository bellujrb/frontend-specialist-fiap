import api from "../Common/api"  // import api.JS

const getAllToys = () => api.get("/toys/getAll/"); // Fazer uma CONEXAO GET

const exportedObject = { // Exportar
    getAllToys,
};
export default exportedObject;