const textInputNameChange = (nameUser, setData, data) => {
    let val = nameUser.toUpperCase();
    if (val.length >= 3) {
    for (let index = 0; index < val.length; index++) {
        if (
        val.charAt(index) != "1" &&
        val.charAt(index) != "2" &&
        val.charAt(index) != "3" &&
        val.charAt(index) != "4" &&
        val.charAt(index) != "5" &&
        val.charAt(index) != "6" &&
        val.charAt(index) != "7" &&
        val.charAt(index) != "8" &&
        val.charAt(index) != "9" &&
        val.charAt(index) != "0" &&
        val.charAt(index) != "," &&
        val.charAt(index) != "." &&
        val.charAt(index) != "@" &&
        val.charAt(index) != '"' &&
        val.charAt(index) != "_" &&
        val.charAt(index) != "-" &&
        val.charAt(index) != "&" &&
        val.charAt(index) != "$" &&
        val.charAt(index) != "!" &&
        val.charAt(index) != "¡" &&
        val.charAt(index) != "¿" &&
        val.charAt(index) != "?" &&
        val.charAt(index) != "=" &&
        val.charAt(index) != "+" &&
        val.charAt(index) != ":" &&
        val.charAt(index) != ";" &&
        val.charAt(index) != "(" &&
        val.charAt(index) != ")" &&
        val.charAt(index) != "/" &&
        val.charAt(index) != "*" &&
        val.charAt(index) != "'"
        ) {
        setData({
            ...data,
            Nombre: val,
            NombreAprobado: true,
        });
        } else {
        setData({
            ...data,
            Nombre: val,
            NombreAprobado: false,
        });
        index = val.length;
        }
    }
    } else {
    setData({
        ...data,
        Nombre: val,
        NombreAprobado: false,
    });
    }
};

const textInputApellidoPChange = (apellidoPUser, setData, data) => {
    let val = apellidoPUser.toUpperCase();
    if (val.length >= 3) {
    for (let index = 0; index < val.length; index++) {
        if (
        val.charAt(index) != "1" &&
        val.charAt(index) != "2" &&
        val.charAt(index) != "3" &&
        val.charAt(index) != "4" &&
        val.charAt(index) != "5" &&
        val.charAt(index) != "6" &&
        val.charAt(index) != "7" &&
        val.charAt(index) != "8" &&
        val.charAt(index) != "9" &&
        val.charAt(index) != "0" &&
        val.charAt(index) != "," &&
        val.charAt(index) != "." &&
        val.charAt(index) != "@" &&
        val.charAt(index) != '"' &&
        val.charAt(index) != "_" &&
        val.charAt(index) != "-" &&
        val.charAt(index) != "&" &&
        val.charAt(index) != "$" &&
        val.charAt(index) != "!" &&
        val.charAt(index) != "¡" &&
        val.charAt(index) != "¿" &&
        val.charAt(index) != "?" &&
        val.charAt(index) != "=" &&
        val.charAt(index) != "+" &&
        val.charAt(index) != ":" &&
        val.charAt(index) != ";" &&
        val.charAt(index) != "(" &&
        val.charAt(index) != ")" &&
        val.charAt(index) != "/" &&
        val.charAt(index) != "*" &&
        val.charAt(index) != "'"
        ) {
        setData({
            ...data,
            ApellidoP: val,
            ApellidoP_Aprobado: true,
        });
        } else {
        setData({
            ...data,
            ApellidoP: val,
            ApellidoP_Aprobado: false,
        });
        index = val.length;
        }
    }
    } else {
    setData({
        ...data,
        ApellidoP: val,
        ApellidoP_Aprobado: false,
    });
    }
};

const textInputApellidoMChange = (apellidoMUser, setData, data) => {
    let val = apellidoMUser.toUpperCase();
    if (val.length >= 3) {
    for (let index = 0; index < val.length; index++) {
        if (
        val.charAt(index) != "1" &&
        val.charAt(index) != "2" &&
        val.charAt(index) != "3" &&
        val.charAt(index) != "4" &&
        val.charAt(index) != "5" &&
        val.charAt(index) != "6" &&
        val.charAt(index) != "7" &&
        val.charAt(index) != "8" &&
        val.charAt(index) != "9" &&
        val.charAt(index) != "0" &&
        val.charAt(index) != "," &&
        val.charAt(index) != "." &&
        val.charAt(index) != "@" &&
        val.charAt(index) != '"' &&
        val.charAt(index) != "_" &&
        val.charAt(index) != "-" &&
        val.charAt(index) != "&" &&
        val.charAt(index) != "$" &&
        val.charAt(index) != "!" &&
        val.charAt(index) != "¡" &&
        val.charAt(index) != "¿" &&
        val.charAt(index) != "?" &&
        val.charAt(index) != "=" &&
        val.charAt(index) != "+" &&
        val.charAt(index) != ":" &&
        val.charAt(index) != ";" &&
        val.charAt(index) != "(" &&
        val.charAt(index) != ")" &&
        val.charAt(index) != "/" &&
        val.charAt(index) != "*" &&
        val.charAt(index) != "'"
        ) {
        setData({
            ...data,
            ApellidoM: val,
            ApellidoM_Aprobado: true,
        });
        } else {
        setData({
            ...data,
            ApellidoM: val,
            ApellidoM_Aprobado: false,
        });
        index = val.length;
        }
    }
    } else {
    setData({
        ...data,
        ApellidoM: val,
        ApellidoM_Aprobado: false,
    });
    }
};

  //Función para validar una CURP
const curpValida = (curp) => {
    let re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    let validado = curp.match(re); //este metodo lo unico que hace es regresarme una cadena que este entre los rangos de la variable re, revisar la documentacion de javascript .mach

    if (!validado)
    //Coincide con el formato general?
    return false;

    //Validar que coincida el dígito verificador
    const digitoVerificador = (curp17) => {
    //Fuente https://consultas.curp.gob.mx/CurpSP/
    var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
        lngSuma = 0.0,
        lngDigito = 0.0;
    for (var i = 0; i < 17; i++)
        lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
    lngDigito = 10 - (lngSuma % 10);
    if (lngDigito == 10) return 0;
    return lngDigito;
    };

    if (validado[2] != digitoVerificador(validado[1])) return false;

    return true; //Validado
};

//Lleva la CURP a mayúsculas para validarlo
const validarInputCurp = (val, setData, data) => {
    let curp = val.toUpperCase();
    // console.log("curp: " + curp);
    if (curpValida(curp)) {
    //  Acá se comprueba
    setData({
        ...data,
        Curp: curp,
        Curp_Aprobado: true,
    });
    } else {
    setData({
        ...data,
        Curp: curp,
        Curp_Aprobado: false,
    });
    }
};

const textInputTelChange = (numero, setData, data) => {
    let val = numero.toUpperCase();
    if (val.length == 10) {
    for (let index = 0; index < val.length; index++) {
        if (
        val.charAt(index) != " " &&
        val.charAt(index) != "A" &&
        val.charAt(index) != "B" &&
        val.charAt(index) != "C" &&
        val.charAt(index) != "D" &&
        val.charAt(index) != "E" &&
        val.charAt(index) != "F" &&
        val.charAt(index) != "G" &&
        val.charAt(index) != "H" &&
        val.charAt(index) != "I" &&
        val.charAt(index) != "J" &&
        val.charAt(index) != "K" &&
        val.charAt(index) != "L" &&
        val.charAt(index) != "M" &&
        val.charAt(index) != "N" &&
        val.charAt(index) != "Ñ" &&
        val.charAt(index) != "O" &&
        val.charAt(index) != "P" &&
        val.charAt(index) != "Q" &&
        val.charAt(index) != "R" &&
        val.charAt(index) != "S" &&
        val.charAt(index) != "T" &&
        val.charAt(index) != "W" &&
        val.charAt(index) != "X" &&
        val.charAt(index) != "Y" &&
        val.charAt(index) != "Z" &&
        val.charAt(index) != "," &&
        val.charAt(index) != "." &&
        val.charAt(index) != "@" &&
        val.charAt(index) != '"' &&
        val.charAt(index) != "_" &&
        val.charAt(index) != "-" &&
        val.charAt(index) != "&" &&
        val.charAt(index) != "$" &&
        val.charAt(index) != "!" &&
        val.charAt(index) != "¡" &&
        val.charAt(index) != "¿" &&
        val.charAt(index) != "?" &&
        val.charAt(index) != "=" &&
        val.charAt(index) != "+" &&
        val.charAt(index) != ":" &&
        val.charAt(index) != ";" &&
        val.charAt(index) != "(" &&
        val.charAt(index) != ")" &&
        val.charAt(index) != "/" &&
        val.charAt(index) != "*" &&
        val.charAt(index) != "'"
        ) {
        setData({
            ...data,
            Telefono: val,
            Telefono_Aprobado: true,
        });
        
        } else {
        setData({
            ...data,
            Telefono: val,
            Telefono_Aprobado: false,
        });
        index = val.length;
        }
    }
    } else {
    setData({
        ...data,
        Telefono: val,
        Telefono_Aprobado: false,
    });
    }
};

export {textInputNameChange, textInputApellidoPChange, textInputApellidoMChange, validarInputCurp, textInputTelChange};