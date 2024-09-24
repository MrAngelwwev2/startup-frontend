import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Grid, 
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupSchema = Yup.object().shape({
  nombres: Yup.string().required('Requerido'),
  apellidos: Yup.string().required('Requerido'),
  cargo: Yup.string().required('Requerido'),
  telefono: Yup.string().required('Requerido'),
  email: Yup.string().email('Email inválido').required('Requerido'),
  password: Yup.string().min(8, 'Mínimo 8 caracteres').required('Requerido'),
  nombreEmpresa: Yup.string().required('Requerido'),
  busquedaTalento: Yup.string().required('Requerido'),
  linkedin: Yup.string().url('URL inválida'),
  terminosYCondiciones: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones')
});

const CompanySignup = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registro de Empresa
        </Typography>
        <Formik
          initialValues={{
            nombres: '',
            apellidos: '',
            cargo: '',
            telefono: '',
            email: '',
            password: '',
            nombreEmpresa: '',
            busquedaTalento: '',
            linkedin: '',
            terminosYCondiciones: false
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, values, setFieldValue }) => (
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
                    name="cargo"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Cargo en la empresa"
                    error={touched.cargo && errors.cargo}
                    helperText={touched.cargo && errors.cargo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="telefono"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Número de teléfono"
                    error={touched.telefono && errors.telefono}
                    helperText={touched.telefono && errors.telefono}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Correo corporativo"
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Contraseña"
                    type="password"
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="nombreEmpresa"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="Nombre de la Empresa"
                    error={touched.nombreEmpresa && errors.nombreEmpresa}
                    helperText={touched.nombreEmpresa && errors.nombreEmpresa}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth error={touched.busquedaTalento && errors.busquedaTalento}>
                    <InputLabel id="busqueda-talento-label">¿Estás en búsqueda de talento?</InputLabel>
                    <Field
                      name="busquedaTalento"
                      as={Select}
                      labelId="busqueda-talento-label"
                      label="¿Estás en búsqueda de talento?"
                      value={values.busquedaTalento}
                      onChange={(e) => setFieldValue('busquedaTalento', e.target.value)}
                    >
                      <MenuItem value="si">Sí, actualmente</MenuItem>
                      <MenuItem value="1mes">En 1 mes</MenuItem>
                      <MenuItem value="2meses">En 2 meses</MenuItem>
                      <MenuItem value="3meses">En 3 meses o más</MenuItem>
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="linkedin"
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    label="LinkedIn/Google"
                    error={touched.linkedin && errors.linkedin}
                    helperText={touched.linkedin && errors.linkedin}
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
                  {touched.terminosYCondiciones && errors.terminosYCondiciones && (
                    <Typography color="error">{errors.terminosYCondiciones}</Typography>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Empezar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default CompanySignup;