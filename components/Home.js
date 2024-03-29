import React, { useContext } from 'react';
import { View, Text, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native'; // corrected import
import ThemeContext from '../context/themeContext';

const Home = () => {
    const colorScheme = useColorScheme();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'; // corrected backtick typo
        toggleTheme(newTheme);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme === 'dark' ? 'black' : 'white',
        },
        text: {
            color: theme === 'dark' ? 'white' : 'black',
        },
        button: {
            color: theme === 'dark' ? 'black' : 'white',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
            <Text style={styles.text} >Current Color Scheme : {theme}</Text>
            <TouchableOpacity
                onPress={handleToggleTheme}
                style={{
                    marginTop: 10,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    backgroundColor: theme === 'dark' ? '#fff' : '#000',
                }}>
                <Text style={styles.button}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </Text>
            </TouchableOpacity>
        </View >
    );
};

export default Home;
