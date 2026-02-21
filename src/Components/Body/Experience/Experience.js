import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Chip,
  Divider 
} from '@mui/material';
import data from "../../../data/experience.json";
import WorkIcon from '@mui/icons-material/Work';

export const Experience = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
        Professional Experience
      </Typography>
      <Grid container spacing={4}>
        {data.experiences.map((exp, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: 4,
              transition: '0.3s',
              '&:hover': {
                boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              }
            }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 2 }}>
                  <Box>
                    <Typography variant="h4" component="h3" fontWeight="bold">
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                    {exp.tenure}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  {exp.skillsAcquired.map((skill, sIndex) => (
                    <Chip 
                      key={sIndex} 
                      label={skill} 
                      size="small" 
                      sx={{ mr: 1, mb: 1, bgcolor: 'primary.light', color: 'primary.contrastText' }} 
                    />
                  ))}
                </Box>
                
                <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
