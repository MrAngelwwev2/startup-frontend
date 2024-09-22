import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Select, MenuItem, Chip } from '@material-ui/core';
import { getProfiles, getSkills, getCertifications, getSoftwares, getMethodologies, getPositions, getCategories } from '../services/profile';

const ProfileSchema = Yup.object().shape({
  tipoEstudio: Yup.string().required('Requerido'),
  institucionEducativa: Yup.string().required('Requerido'),
  gradoAcademico: Yup.string().required('Requerido'),
  perfil: Yup.string().required('Requerido'),
  skillsTecnicos: Yup.array().min(1, 'Seleccione al menos una habilidad'),
  certificaciones: Yup.array().min(1, 'Seleccione al menos una certificación'),
  programasSoftwares: Yup.array().min(1, 'Seleccione al menos un programa/software'),
  metodologiasTrabajo: Yup.array().min(1, 'Seleccione al menos una metodología'),
  cargosPuestos: Yup.array().min(1, 'Seleccione al menos un cargo/puesto'),
  categoria: Yup.string().required('Requerido'),
});

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [softwares, setSoftwares] = useState([]);
  const [methodologies, setMethodologies] = useState([]);
  const [positions, setPositions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProfiles(await getProfiles());
      setCategories(await getCategories());
    };
    fetchData();
  }, []);

  const handleProfileChange = async (profileId) => {
    setSkills(await getSkills(profileId));
    setCertifications(await getCertifications(profileId));
    setSoftwares(await getSoftwares(profileId));
    setMethodologies(await getMethodologies(profileId));
    setPositions(await getPositions(profileId));
  };

  return (
    <div>
      <Typography variant="h4">Perfil Académico y Profesional</Typography>
      <Formik
        initialValues={{
          tipoEstudio: '',
          institucionEducativa: '',
          gradoAcademico: '',
          perfil: '',
          skillsTecnicos: [],
          certificaciones: [],
          programasSoftwares: [],
          metodologiasTrabajo: [],
          cargosPuestos: [],
          categoria: '',
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Aquí iría la lógica para enviar los datos al backend
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <Field name="tipoEstudio" as={Select} label="Tipo de Estudio">
              <MenuItem value="tecnico">Técnico</MenuItem>
              <MenuItem value="universitario">Universitario</MenuItem>
            </Field>
            <Field name="institucionEducativa" as={TextField} label="Institución Educativa" />
            <Field name="gradoAcademico" as={TextField} label="Grado Académico" />
            <Field
              name="perfil"
              as={Select}
              label="Perfil"
              onChange={(e) => {
                setFieldValue("perfil", e.target.value);
                handleProfileChange(e.target.value);
              }}
            >
              {profiles.map((profile) => (
                <MenuItem key={profile.id} value={profile.id}>{profile.name}</MenuItem>
              ))}
            </Field>
            <Field
              name="skillsTecnicos"
              as={Select}
              multiple
              label="Skills Técnicos"
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={skills.find(skill => skill.id === value).name} onDelete={() => {
                      const newSelected = values.skillsTecnicos.filter(item => item !== value);
                      setFieldValue("skillsTecnicos", newSelected);
                    }} />
                  ))}
                </div>
              )}
            >
              {skills.map((skill) => (
                <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
              ))}
            </Field>
            {/* Implementar campos similares para certificaciones, programas/softwares, metodologías de trabajo, cargos/puestos */}
            <Field name="categoria" as={Select} label="Categoría">
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
              ))}
            </Field>
            <Button type="submit" variant="contained" color="primary">Guardar Perfil</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;