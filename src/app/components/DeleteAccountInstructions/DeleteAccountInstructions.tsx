import { Container, Typography, Link, Box, Grid } from '@mui/material';

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
          <Box
            sx={{
              textAlign: 'left',
              mt: 5
            }}
          >
            <Typography variant="h5" fontWeight="bold" paragraph>
              To delete your account
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ mb: 2 }}>
                1. Open Fitfai app and <b>Log in</b> to your account.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                2. Navigate to <b>Settings</b> (tap the icon in the top right
                corner of the Home screen).
              </Typography>
              <Typography sx={{ mb: 2 }}>
                3. Scroll down and click on <b>Delete Account</b>.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                4. A message will appear asking if you're sure. Tap{' '}
                <b>Delete</b> to permanently delete your account.
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              If you have any questions or require any assistance, feel free to
              contact us at{' '}
              <Link href="mailto:support@fitfai.com" underline="hover">
                support@fitfai.com
              </Link>
              .
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'left',
              mt: 5
            }}
          >
            <Typography variant="h6" fontWeight="bold" paragraph>
              Deleting your account will:
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ mb: 2 }}>
                - Your account will be permanently deleted.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                - All personal data associated with your account will be erased.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                - Any fitness data, including workout history and progress, will
                be anonymized.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                - You will no longer have access to any content, services, or
                features associated with your account.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                - You will not be able to recover any deleted data once the
                process is completed.
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mt: 5 }}>
              For more details on how we handle your data, please refer to our{' '}
              <Link href="https://fitfai.com/privacy-policy" underline="hover">
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};

export default DeleteAccountInstructions;
