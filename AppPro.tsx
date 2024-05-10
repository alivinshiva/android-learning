import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark"  // setting up dark mode
    return (
        <View style={styles.container}>
            <Text style ={isDarkMode ? styles.whiteText: styles.blackText}>
                hello app user
            </Text>
        </View>
    )
}
x
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',  // for left-to-right
        justifyContent: 'center'    // for top-to-bottom
    },
    whiteText:{
        color: '#ffffff'
    },
    blackText:{
        color:'#000000'
    }
})

export default AppPro;