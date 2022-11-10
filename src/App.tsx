import React from 'react';
import './App.css';
import { ColorSchemeProvider, MantineProvider, ColorScheme } from '@mantine/core';
import WebsiteContainer from './WebsiteContainer';

function App() {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <WebsiteContainer />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
