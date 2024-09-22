import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Select, MenuItem, Checkbox, FormControlLabel } from '@material-ui/core';

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
  terminosYCondiciones: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones')
});

const SignUp = () => {
  return (
    <div>
      <Typography variant="h4">Registrarse</Typography>
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
          terminosYCondiciones: false
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Aquí iría la lógica para enviar los datos al backend
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="nombres" as={TextField} label="Nombres" error={touched.nombres && errors.nombres} helperText={touched.nombres && errors.nombres} />
            <Field name="apellidos" as={TextField} label="Apellidos" error={touched.apellidos && errors.apellidos} helperText={touched.apellidos && errors.apellidos} />
            <Field name="email" as={TextField} label="Correo Electrónico" error={touched.email && errors.email} helperText={touched.email && errors.email} />
            <Field name="fechaNacimiento" as={TextField} type="date" label="Fecha de Nacimiento" InputLabelProps={{ shrink: true }} error={touched.fechaNacimiento && errors.fechaNacimiento} helperText={touched.fechaNacimiento && errors.fechaNacimiento} />
            <Field name="numeroDocumento" as={TextField} label="Número de Documento" error={touched.numeroDocumento && errors.numeroDocumento} helperText={touched.numeroDocumento && errors.numeroDocumento} />
            <Field name="telefono" as={TextField} label="Número de Teléfono" error={touched.telefono && errors.telefono} helperText={touched.telefono && errors.telefono} />
            <Field name="genero" as={Select} label="Género">
              <MenuItem value="masculino">Masculino</MenuItem>
              <MenuItem value="femenino">Femenino</MenuItem>
              <MenuItem value="otro">Otro</MenuItem>
            </Field>
            <Field name="ciudad" as={TextField} label="Ciudad" error={touched.ciudad && errors.ciudad} helperText={touched.ciudad && errors.ciudad} />
            <Field name="pais" as={TextField} label="País" error={touched.pais && errors.pais} helperText={touched.pais && errors.pais} />
            <Field name="password" as={TextField} type="password" label="Contraseña" error={touched.password && errors.password} helperText={touched.password && errors.password} />
            <Field name="confirmPassword" as={TextField} type="password" label="Confirmar Contraseña" error={touched.confirmPassword && errors.confirmPassword} helperText={touched.confirmPassword && errors.confirmPassword} />
            <Field name="terminosYCondiciones" as={FormControlLabel} control={<Checkbox />} label="Acepto los términos y condiciones" />
            <Button type="submit" variant="contained" color="primary">Registrarse</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;