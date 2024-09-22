import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Link } from '@material-ui/core';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(8, 'Mínimo 8 caracteres').required('Requerido'),
});

const Login = () => {
    return (
        <div>
            <Typography variant='h4'>Iniciar Sesión</Typography>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                // Aquí iría la lógica para enviar los datos al backend
                console.log(values);
                setSubmitting(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="email" as={TextField}
                            label="Correo Electrónico"
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                        <Field
                            name="password" as={TextField}
                            label="Contraseña"
                            error={touched.password && errors.password}
                            helperText={touched.password && errors.password}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Iniciar Sesión
                        </Button>
                    </Form>
                )}
            </Formik>
            <Link href='/signup'>Registrarse</Link>
            <Link href='/forgot-password'>¿Olvidaste tu contraseña?</Link>
        </div>
    );
};

export default Login;