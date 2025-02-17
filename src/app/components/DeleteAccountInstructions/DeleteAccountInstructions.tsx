import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  Link,
  Box,
  Grid
} from '@mui/material';

const DeleteAccountInstructions = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ flex: 1 }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 15,
            textAlign: 'center',
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Account Deletion Instructions
          </Typography>
          <Typography variant="body1" paragraph>
            If you wish to delete your account and anonymize your data, follow
            these simple steps:
          </Typography>
          <List sx={{ textAlign: 'left' }}>
            <ListItem>1. Log in to your account on the app.</ListItem>
            <ListItem>
              2. Navigate to "Settings" (tap the icon in the top right corner of
              the Home screen).
            </ListItem>
            <ListItem>3. Scroll down and click on "Delete Account".</ListItem>
            <ListItem>
              4. Your account will be permanently deleted, and any fitness data
              will be anonymized.
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ mt: 2 }}>
            If you have any questions, feel free to{' '}
            <Link href="mailto:support@fitfai.com" underline="hover">
              contact us
            </Link>
            .
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
};

export default DeleteAccountInstructions;
