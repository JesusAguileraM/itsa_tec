import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";//usar
import Feather from "react-native-vector-icons/Feather";
import { ProgressBar,} from "react-native-paper";

const RegistroScreen2 = ({ navigation }) => {


    const [data, setData] = React.useState({
        Name: "",
        ApellidoP: "",
        ApellidoM: "",
        Curp: "",
        Telefono: "",
        nameAprobado: false,
        ApellidoP_Aprobado: false,
        ApellidoM_Aprobado: false,
        Curp_Aprobado: false,
        Telefono_Aprobado: false,
    });

    const textInputNameChange = (nameUser) => {
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
                name: val,
                nameAprobado: true,
            });
            } else {
            setData({
                ...data,
                name: val,
                nameAprobado: false,
            });
            index = val.length;
            }
        }
        } else {
        setData({
            ...data,
            name: val,
            nameAprobado: false,
        });
        }
    };

    const textInputApellidoPChange = (apellidoPUser) => {
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

    const textInputApellidoMChange = (apellidoMUser) => {
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
    const validarInputCurp = (val) => {
        let curp = val.toUpperCase();
        console.log("curp: " + curp);
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

    const textInputTelChange = (numero) => {
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
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#0064A2" barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Parte 1</Text>

            <ProgressBar progress={0.33} color={"#fff"} />
        </View>
        <Animatable.View animation="bounceIn" style={styles.footer}>
            <ScrollView>
            <Text style={styles.text_footer}>Nombre del Alumno</Text>
            <View style={styles.action}>
                <TextInput
                placeholder="Nombre Completo"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputNameChange(val)}
                />
                {data.nameAprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={styles.text_footer}>Apellido Paterno</Text>
            <View style={styles.action}>
                <TextInput
                placeholder="Primer Apellido"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputApellidoPChange(val)}
                />
                {data.ApellidoP_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={styles.text_footer}>Apellido Materno</Text>
            <View style={styles.action}>
                <TextInput
                placeholder="Segundo apellido"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputApellidoMChange(val)}
                />
                {data.ApellidoM_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={styles.text_footer}>CURP</Text>
            <View style={styles.action}>
                <TextInput
                placeholder="Ejemp. PEMM780912MBCLRR00"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => {
                    console.log(val);
                    return validarInputCurp(val);
                }}
                />
                {data.Curp_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <Text style={styles.text_footer}>Telefono</Text>
            <View style={styles.action}>
                <TextInput
                placeholder="4531231234 nota: sin espacios"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputTelChange(val)}
                />
                {data.Telefono_Aprobado ? (
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
                ) : null}
            </View>

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                Crear la cuenta es el primer paso para incribirte dudas o
                aclaraciones entrar a la pagina oficial del instituto
                </Text>
                <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                {" "}
                www.itsa.edu.mx
                </Text>
                <Text style={styles.color_textPrivate}> o llamar al teléfono</Text>
                <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
                {" "}
                453-534-8300{" "}
                </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                    navigation.navigate("Parte3Screen");
                }}
                >
                <LinearGradient
                    colors={["#0064A2", "#2096BA"]}
                    style={styles.signIn}
                >
                    <Text
                    style={[
                        styles.textSign,
                        {
                        color: "#fff",
                        },
                    ]}
                    >
                    Siguiente
                    </Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                    styles.signIn,
                    {
                    borderColor: "#fff",
                    borderWidth: 1,
                    marginTop: 15,
                    },
                ]}
                >
                <Text
                    style={[
                    styles.textSign,
                    {
                        color: "#0064A2",
                    },
                    ]}
                >
                    Regresar
                </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
        </View>
    );
    };

export default RegistroScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0064A2",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop: 10,
    },
    footer: {
        flex: Platform.OS === "ios" ? 10 : 15, //revisar esta parte del tamaño en ios
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: -20,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textPrivate: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    color_textPrivate: {
        color: "grey",
    },
    });
