import React from 'react';
import { Button, Typography, Container, Grid, makeStyles } from '@material-ui/core';
import { Person, Business } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  button: {
    padding: theme.spacing(2),
    fontSize: '1.2rem',
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: '2rem',
  },
}));

const ProfileSelection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCandidateClick = () => {
    navigate('/login');
  };

  const handleCompanyClick = () => {
    navigate('/company-login');
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Typography component="h1" variant="h4" className={classes.title}>
        Selecciona tu perfil
      </Typography>
      <Grid container spacing={2} className={classes.buttonContainer}>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleCandidateClick}
            startIcon={<Person className={classes.icon} />}
          >
            Candidatos
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleCompanyClick}
            startIcon={<Business className={classes.icon} />}
          >
            Empresas
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileSelection;