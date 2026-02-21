import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // A professional green
    },
    secondary: {
      main: '#1976d2', // A nice blue
    },
    background: {
      default: '#f4f7f6',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '0.8rem',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.6rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
