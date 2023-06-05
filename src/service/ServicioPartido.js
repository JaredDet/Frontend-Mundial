import axios from "axios";

export const obtenerDatosEstadisticas = async (id) => {
  const response = await axios.get(
    `http://localhost:8080/api/partidos/${id}/estadisticas`
  );
  return response.data;
};

export const obtenerDatosGoleadores = async (id) => {
  const response = await axios.get(
    `http://localhost:8080/api/partidos/${id}/goles`
  );
  return response.data;
};

export const obtenerDatosExtras = async (id) => {
  const response = await axios.get(
    `http://localhost:8080/api/partidos/${id}/datosExtras`
  );
  return response.data;
};

export const obtenerDatosMarcadores = async (id) => {
  const response = await axios.get(
    `http://localhost:8080/api/partidos/${id}/marcador`
  );
  return response.data;
};

export const obtenerDatosEquipos = async (id) => {
  const response = await axios.get(
    `http://localhost:8080/api/partidos/${id}/plantillas`
  );
  return response.data;
};

export const obtenerDatosTitularesEquipos = async (id) => {
  const equipos = await obtenerDatosEquipos(id);
  const local = {
    nombre: equipos[0].nombre,
    bandera: equipos[0].bandera,
    titulares: equipos[0].titulares,
    formacion: equipos[0].formacion,
    posicionLaterales: equipos[0].posicionLaterales,
  };
  const visita = {
    nombre: equipos[1].nombre,
    titulares: equipos[1].titulares,
    posicionLaterales: equipos[1].posicionLaterales,
  };
  return { local, visita };
};

export const obtenerDatosSuplentesEquipos = async (id) => {
  const equipos = await obtenerDatosEquipos(id);
  const local = {
    nombre: equipos[0].nombre,
    bandera: equipos[0].bandera,
    suplentes: equipos[0].banca,
  };
  const visita = {
    nombre: equipos[1].nombre,
    bandera: equipos[1].bandera,
    suplentes: equipos[1].banca,
  };
  return { local, visita };
};

export const obtenerDatosTecnicosEquipos = async (id) => {
  const equipos = await obtenerDatosEquipos(id);
  const local = {
    bandera: equipos[0].bandera,
    tecnico: equipos[0].tecnico.nombre,
  };
  const visita = {
    bandera: equipos[1].bandera,
    tecnico: equipos[1].tecnico.nombre,
  };
  return { local, visita };
};

export const obtenerDatosFormacionEquipos = async (id) => {
  const equipos = await obtenerDatosEquipos(id);
  const local = {
    bandera: equipos[0].bandera,
    nombre: equipos[0].nombre,
    formacion: equipos[0].formacion,
  };
  const visita = {
    bandera: equipos[1].bandera,
    nombre: equipos[1].nombre,
    formacion: equipos[1].formacion,
  };
  return { local, visita };
};

