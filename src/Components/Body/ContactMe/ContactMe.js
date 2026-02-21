import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardActionArea,
  IconButton,
  Snackbar,
  Alert,
  Tooltip,
  Avatar
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import data from "../../../data/contact-me.json";

export const ContactMe = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage(`Copied ${type} to clipboard!`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const contactDetails = data.contactDetails;
  const socialMedia = data.socialMediaContacts;

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
        Let's Connect
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}>
            Contact Details
          </Typography>
          
          <Card sx={{ mb: 2, borderRadius: 3 }}>
            <CardActionArea onClick={() => copyToClipboard(contactDetails.emailAddress.value, 'email')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <EmailIcon />
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="text.secondary">Email</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{contactDetails.emailAddress.value}</Typography>
                </Box>
                <Tooltip title="Copy">
                  <IconButton size="small"><ContentCopyIcon fontSize="small" /></IconButton>
                </Tooltip>
              </CardContent>
            </CardActionArea>
          </Card>

          {contactDetails.phoneNumber && (
            <Card sx={{ borderRadius: 3 }}>
              <CardActionArea onClick={() => copyToClipboard(contactDetails.phoneNumber.value, 'phone number')}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                    <PhoneIcon />
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="caption" color="text.secondary">Phone</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>{contactDetails.phoneNumber.value}</Typography>
                  </Box>
                  <Tooltip title="Copy">
                    <IconButton size="small"><ContentCopyIcon fontSize="small" /></IconButton>
                  </Tooltip>
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}>
            Social Network
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardActionArea component="a" href={socialMedia.linkedIn.websiteUrl} target="_blank">
                  <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2.5 }}>
                    <LinkedInIcon sx={{ fontSize: 40, color: '#0077b5', mr: 2 }} />
                    <Typography variant="h6">LinkedIn</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardActionArea component="a" href={socialMedia.github.websiteUrl} target="_blank">
                  <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2.5 }}>
                    <GitHubIcon sx={{ fontSize: 40, color: '#333', mr: 2 }} />
                    <Typography variant="h6">GitHub</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {socialMedia.leetcode && (
              <Grid item xs={12}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardActionArea component="a" href={socialMedia.leetcode.websiteUrl} target="_blank">
                    <CardContent sx={{ display: 'flex', alignItems: 'center', p: 2.5 }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#ffa116', mr: 2 }} />
                      <Typography variant="h6">LeetCode</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};
