import { Stack } from 'expo-router';
import { AuthProvider } from '../src/context/AuthContext';

export default function Layout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Login' }} />
                <Stack.Screen name="signup" options={{ title: 'Signup' }} />
                <Stack.Screen name="welcome" options={{ title: 'Welcome' }} />
            </Stack>
        </AuthProvider>
    );
}
