import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="academico" 
          options={{ title: 'Acadêmico' }} 
        />
        <Stack.Screen 
          name="experiencia" 
          options={{ title: 'Experiência' }} 
        />
        <Stack.Screen 
          name="projetos" 
          options={{ title: 'Projetos' }} 
        />
        <Stack.Screen 
          name="contato" 
          options={{ title: 'Contato' }} 
        />
        
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}