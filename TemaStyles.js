import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from "react-native-paper";

export const CustomDefaultTheme = {
    // tema por defecto
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: "#ffffff",
        text: "#333333",
    },
};
export const CustomDarkTheme = {
    //tema personalisado
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...PaperDarkTheme.colors,
        background: "#333333",
        text: "#ffffff",
    },
};

export default CustomDefaultTheme;

