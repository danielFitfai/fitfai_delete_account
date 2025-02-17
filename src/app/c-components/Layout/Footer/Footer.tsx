import { Avatar, Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { styles } from '../../../../assets/styles/styles';
import clomberIcon from '../../../../assets/images/logo/fitfai-icon.png';
import './Footer.css';

function Footer() {
  function getYear(): string {
    const date = new Date();
    const year = date.getFullYear();
    return year.toString();
  }

  return (
    <Container
      sx={{
        marginTop: 10,
        maxWidth: '95%',
        borderTop: 1,
        bgcolor: styles.white,
        zIndex: 10
      }}
    >
      <Box sx={{ my: 3 }}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Avatar
            alt="Clomber logo"
            src={clomberIcon}
            sx={{ display: { xs: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              my: 'auto',
              fontWeight: 700,
              color: styles.black,
              textDecoration: 'none'
            }}
          >
            Fitfai
          </Typography>
        </Box>
        <Typography variant="body2">
          &copy; Clomber Ltd {getYear()}. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Clomber Ltd. Registered Number 14398476. Registered in England and
          Wales.
        </Typography>
      </Box>
    </Container>
  );
}
export default Footer;
