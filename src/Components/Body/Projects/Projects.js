import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Box, 
  Chip,
  Link
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import data from "../../../data/projects.json";

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {data.projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: 4,
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                transition: '0.3s'
              }
            }}>
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {project.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.keyTerms.map((term, tIndex) => (
                    <Chip key={tIndex} label={term} size="small" variant="outlined" color="secondary" />
                  ))}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                {project.links.map((link, lIndex) => (
                  <Button 
                    key={lIndex} 
                    href={link.link} 
                    target="_blank" 
                    startIcon={link.name.toLowerCase().includes('github') ? <GitHubIcon /> : <LaunchIcon />}
                    size="small"
                  >
                    {link.name}
                  </Button>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
