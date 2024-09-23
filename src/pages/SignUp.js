import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Typography, 
  Select, 
  MenuItem, 
  Checkbox, 
  FormControlLabel, 
  Container, 
  FormControl,
  InputLabel,
  FormHelperText,
  Grid, 
  makeStyles 
} from '@material-ui/core';
import {
  getCountries,
} from '../services/profile';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: '100%',
  },
}));

const SignUpSchema = Yup.object().shape({
  nombres: Yup.string().required('Requerido'),
  apellidos: Yup.string().required('Requerido'),
  email: Yup.string().email('Email inválido').required('Requerido'),
  fechaNacimiento: Yup.date().required('Requerido'),
  numeroDocumento: Yup.string(),
  telefono: Yup.string().required('Requerido'),
  genero: Yup.string().required('Requerido'),
  ciudad: Yup.string().required('Requerido'),
  pais: Yup.string().required('Requerido'),
  password: Yup.string().min(8, 'Mínimo 8 caracteres').required('Requerido'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),
  urlLinkedin: Yup.string().required('Requerido'),
  terminosYCondiciones: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones')
});

const SignUp = () => {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const country = await getCountries();
        setCountries(country);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>Registrarse</Typography>
      <Formik
        initialValues={{
          nombres: '',
          apellidos: '',
          email: '',
          fechaNacimiento: '',
          numeroDocumento: '',
          telefono: '',
          genero: '',
          ciudad: '',
          pais: '',
          password: '',
          confirmPassword: '',
          urlLinkedin: '',
          terminosYCondiciones: false
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
          <Form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  name="nombres"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="Nombres"
                  error={touched.nombres && errors.nombres}
                  helperText={touched.nombres && errors.nombres}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="apellidos"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="Apellidos"
                  error={touched.apellidos && errors.apellidos}
                  helperText={touched.apellidos && errors.apellidos}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="Correo Electrónico"
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="fechaNacimiento"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  type="date"
                  label="Fecha de Nacimiento"
                  InputLabelProps={{ shrink: true }}
                  error={touched.fechaNacimiento && errors.fechaNacimiento}
                  helperText={touched.fechaNacimiento && errors.fechaNacimiento}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="numeroDocumento"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="Número de Documento"
                  error={touched.numeroDocumento && errors.numeroDocumento}
                  helperText={touched.numeroDocumento && errors.numeroDocumento}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="telefono"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="Número de Teléfono (Ej. +51987654321)"
                  error={touched.telefono && errors.telefono}
                  helperText={touched.telefono && errors.telefono}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" fullWidth error={touched.genero && errors.genero}>
                  <InputLabel id="genero-label">Género</InputLabel>
                  <Field
                    name="genero"
                    as={Select}
                    labelId="genero-label"
                    label="Género"
                    onChange={(e) => {
                      setFieldValue('genero', e.target.value);
                    }}
                  >
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Femenino">Femenino</MenuItem>
                  </Field>
                  {touched.genero && errors.genero && <FormHelperText>{errors.genero}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl variant="outlined" fullWidth error={touched.pais && errors.pais}>
                  <InputLabel id="pais-label">País</InputLabel>
                  <Field
                    name="pais"
                    as={Select}
                    labelId="pais-label"
                    label="País"
                    onChange={(e) => {
                      setFieldValue('pais', e.target.value);
                    }}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.id_countries} value={country.id_countries}>
                        {country.country}
                      </MenuItem>
                    ))}
                  </Field>
                  {touched.pais && errors.pais && <FormHelperText>{errors.pais}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="ciudad"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="Ciudad"
                  error={touched.ciudad && errors.ciudad}
                  helperText={touched.ciudad && errors.ciudad}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="password"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  type="password"
                  label="Contraseña"
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  name="confirmPassword"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  type="password"
                  label="Confirmar Contraseña"
                  error={touched.confirmPassword && errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="urlLinkedin"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  label="URL Linkedin"
                  error={touched.urlLinkedin && errors.urlLinkedin}
                  helperText={touched.urlLinkedin && errors.urlLinkedin}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Field
                      name="terminosYCondiciones"
                      as={Checkbox}
                      color="primary"
                    />
                  }
                  label="Acepto los términos y condiciones"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;