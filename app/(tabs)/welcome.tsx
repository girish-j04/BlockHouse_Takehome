import { View, Text, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Image source={require('../../assets/images/react-logo.png')} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#61dafb',
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});
