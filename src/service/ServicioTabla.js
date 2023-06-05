import axios from "axios";

export const obtenerDatosPartido = async (nombre) => {
    const response = await axios.get(`http://localhost:8080/api/ronda/grupos/${nombre}`);
    return response.data;
};

