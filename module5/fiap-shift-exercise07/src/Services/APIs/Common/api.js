import axios from 'axios'; // Estrutura PADRAO

const ApiConn = axios.create({
    baseURL: process.env.REACT_APP_URL, // URL PADRAO, VARIAVEL DE AMBIENTE
});

export default ApiConn