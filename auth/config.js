const BACKENDURL = "https://proagrimex.com/api/v1";
const PRUEBAS = "http://localhost:3000/api/v1";
//movil
const USERS = "users";
const TEMPORARYUSERS = "temporaryusers";
const TIPOPAGOS = "tipopagos";
const CARRERAS = "carreras";
const DOCUMENTOS = "documentos";
const DESCARGAS = "descargas";
const CALIFICACIONES = "calificaciones";

const DEPOSITOALUMNO = "depositosbancarios/alumno";  //crea o actualiza un deposito bancario (/:id obtiene de un alumno depositos)
const DEPOSITOSNOPROCESADOS = "depositosbancarios/alumno/noprocesados"; //obtiene la lista de los no procesados
const DEPOSITOSNOPAGADOS = "depositosbancarios/alumno/nopagados"; //obtiene la lista de los no pagados

//web
const DEPOSITOS = "depositosbancarios"; //crear y obtener todos los depositos (/:id eliminar uno de ellos)
const DEPOSITOSPROCESADO = "depositosbancarios/procesado";
const DEPOSITOSESTADOPAGO = "depositosbancarios/estadopago";
const DEPOSITOSPAGADO = "depositosbancarios/pagado";

//api de direcciones
const ESTADOS = 'https://api-sepomex.hckdrk.mx/query/get_estados';  
const MUNICIPIOS = 'https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado';
const TOKEN = 'token=2a0fe2d8-c6c1-4f22-bba7-c6838d99a60e';

// RUTAS DE ARCHIVOS ESTATICOS
const ARCHIVOS = "https://proagrimex.com/static/documentos";
const DOCUMENTOSFOTOS = "https://proagrimex.com/static/fotos";
const DEPOSITOFOTOS = "https://proagrimex.com/static/depositos";

const ESTADOPAGO = {
    revision: "revisión", 
    aceptado: "aceptado", 
    rechazado: "rechazado", 
    finalizado: "finalizado", 
    cancelado: "cancelado",
};


export {
    BACKENDURL,
    ESTADOPAGO, 
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
    CALIFICACIONES,
    DOCUMENTOSFOTOS,
    DEPOSITOFOTOS,
    DEPOSITOSNOPAGADOS,
    DEPOSITOSNOPROCESADOS,
    DEPOSITOSESTADOPAGO,
    DEPOSITOSPAGADO,
    DEPOSITOSPROCESADO,
    DEPOSITOALUMNO,
};