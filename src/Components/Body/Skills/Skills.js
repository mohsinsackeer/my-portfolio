import React from 'react';
import { Container, Typography, Grid, Paper, Box, Chip } from '@mui/material';
import data from "../../../data/skills.json";

export const Skills = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
        Technical Skills
      </Typography>
      
      <Grid container spacing={3}>
        {data.lines.map((line, index) => {
          const [category, skills] = line.split(':');
          const skillList = skills ? skills.split(',').map(s => s.trim()) : [];
          
          return (
            <Grid item xs={12} key={index}>
              <Paper sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" color="primary" gutterBottom fontWeight="bold">
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2 }}>
                  {skillList.length > 0 ? (
                    skillList.map((skill, sIndex) => (
                      <Chip 
                        key={sIndex} 
                        label={skill} 
                        variant="filled" 
                        sx={{ 
                          fontSize: '1rem', 
                          py: 2, 
                          px: 1,
                          bgcolor: 'secondary.light',
                          color: 'secondary.contrastText',
                          fontWeight: 'medium'
                        }} 
                      />
                    ))
                  ) : (
                    <Typography variant="body1">{line}</Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
