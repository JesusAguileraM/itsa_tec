import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Linking,
} from "react-native";
import {
    Button,
    Paragraph,
    Dialog,
    Portal,
    Caption,
    ProgressBar,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";


const RegistrarseScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => {
        setVisible(false);
        navigation.navigate("IniciarSecionScreen");
    };

    return (
    <View style={styles.container}>

        <StatusBar backgroundColor="#0064A2" barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Listo</Text>
            <ProgressBar progress={1} color={"#fff"} />
        </View>


        <Animatable.View animation="bounceIn" style={styles.footer}>
            <ScrollView>

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>! Has completado el registro ¡</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                        Revisa tú correo, dentro de las siguiente 24 horas te
                        enviaremos una cuenta institucional para que puedas iniciar
                        sesión.
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button mode="text" color="#2096BA" onPress={hideDialog}>
                        Aceptar
                        </Button>
                    </Dialog.Actions>
                    </Dialog>
                </Portal>

                <View>
                    <Text>
                    Nota: Recuerde que para poder Incribirse debe iniciar secion y
                    tener a la mano los documentos escaneados en jpg o pdf
                    individualmente
                    </Text>
                </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text>+ Acta de nacimiento</Text>
            </View>
            <View>
                <Text>+ Curp</Text>
            </View>
            <View>
                <Text>+ Constancia de terminacion de Bachillerato</Text>
            </View>
            <View>
                <Text>
                + Estudio de sangre "Se necesita para poder crearle el seguro
                institucional"
                </Text>
            </View>
            <View>
                <Text></Text>
            </View>
            <View>
                <Text>
                La cuenta bancaria donde hara su pago se le asignara ya que se
                haya logueado"
                </Text>
            </View>

            <View>
                <Text>Para mas informacion ...</Text>
            </View>

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                Entrar a la pagina oficial del instituto
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
                onPress={() => showDialog()}
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
                    Completado
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

export default RegistrarseScreen;

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
    contenidoCard: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3 + 20,
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
