import axios from 'axios';

//  ERROR DE CORS - USING SERVER PROXY VITE.CONFIG.TS
const culqiApi = axios.create({
    baseURL: 'https://fepruebatecnicaculqi-backend-production.up.railway.app/',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    },
});

export default culqiApi;