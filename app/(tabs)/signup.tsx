import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Button, Text } from 'react-native-paper';

export default function SignupScreen() {
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Too short!').required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    });

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>Signup</Text>

            <Formik
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={() => router.push('/welcome')}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <TextInput
                            label="Email"
                            mode="outlined"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={styles.input}
                            error={touched.email && errors.email ? true : false}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.error}>{errors.email}</Text>
                        )}

                        <TextInput
                            label="Password"
                            mode="outlined"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={styles.input}
                            error={touched.password && errors.password ? true : false}
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.error}>{errors.password}</Text>
                        )}

                        <TextInput
                            label="Confirm Password"
                            mode="outlined"
                            secureTextEntry
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            style={styles.input}
                            error={touched.confirmPassword && errors.confirmPassword ? true : false}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                            <Text style={styles.error}>{errors.confirmPassword}</Text>
                        )}

                        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                            Signup
                        </Button>
                        <Button mode="text" onPress={() => router.push('/')}>
                            Already have an account? Login
                        </Button>
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 15,
    },
    button: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});
