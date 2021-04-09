const BACKENDURL = "https://proagrimex.com/api/v1";
const PRUEBAS = "http://localhost:3000/api/v1";
const USERS = "users";
const TEMPORARYUSERS = "temporaryusers";
const TIPOPAGOS = "tipopagos";
const CARRERAS = "carreras";
const DOCUMENTOS = "documentos";
const DESCARGAS = "descargas";
const DEPOSITOS = "depositosbancarios";
const DEPOSITOSNOPROCESADOS = "depositosbancarios/noprocesados";
const DEPOSITOSNOPAGADOS = "depositosbancarios/nopagados";
const ESTADOS = 'https://api-sepomex.hckdrk.mx/query/get_estados';
// 'https://api-sepomex.hckdrk.mx/query/get_estados?token=2a0fe2d8-c6c1-4f22-bba7-c6838d99a60e';
const MUNICIPIOS = 'https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado';
// 'https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/Michoac%C3%A1n%20de%20Ocampo?token=2a0fe2d8-c6c1-4f22-bba7-c6838d99a60e';
const TOKEN = 'token=2a0fe2d8-c6c1-4f22-bba7-c6838d99a60e';
// RUTAS DE ARCHIVOS ESTATICOS
const ARCHIVOS = "https://proagrimex.com/static/documentos";
const DOCUMENTOSFOTOS = "https://proagrimex.com/static/fotos";
const DEPOSITOFOTOS = "https://proagrimex.com/static/depositos";

export {
    BACKENDURL, 
    PRUEBAS, 
    USERS,
    TEMPORARYUSERS, 
    TIPOPAGOS, 
    CARRERAS, 
    ESTADOS, 
    MUNICIPIOS, 
    TOKEN, 
    DOCUMENTOS, 
    DEPOSITOS,
    DESCARGAS,
    ARCHIVOS,
    DOCUMENTOSFOTOS,
    DEPOSITOFOTOS,
    DEPOSITOSNOPAGADOS,
    DEPOSITOSNOPROCESADOS,
};