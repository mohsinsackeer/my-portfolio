import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import data from '../../../data/about-me.json';

export const AboutMe = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800 }}>
          Hi, I'm {data.name}
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Software Engineer @ Google
        </Typography>
      </Box>
      
      <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, bgcolor: 'background.paper', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
        {data.lines.map((line, index) => (
          <React.Fragment key={index}>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 3 }}>
              {line}
            </Typography>
            {index < data.lines.length - 1 && <Divider sx={{ my: 3 }} />}
          </React.Fragment>
        ))}
      </Paper>
    </Container>
  );
};
