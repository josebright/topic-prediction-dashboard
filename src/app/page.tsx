'use client'

import React, { useState } from 'react';
import { Button, MenuItem, TextField, Grid } from '@mui/material';
import styles from "./page.module.css";
import Link from 'next/link';
import { publicationTypes } from './constants';
import { fieldOfSciences } from './constants';


export default function Home(): JSX.Element {
  const [concept, setConcept] = useState<string>('');
  const [fos, setFos] = useState<string>('');
  const [subFos, setSubFos] = useState<string>('');
  const [subSubFos, setSubSubFos] = useState<string>('');
  const [publicationType, setpublicationType] = useState<string>('');

  const handleConceptChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setConcept(event.target.value as string);
  };

  const handleFOSChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFos(event.target.value as string);
    setSubFos('');
    setSubSubFos('');
  };

  const handleSubFOSChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSubFos(event.target.value as string);
    setSubSubFos('');
  };

  const handleSubSubFOSChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSubSubFos(event.target.value as string);
  };

  const getSubFos = () => {
    if (!fos) return [];
    const selectedFOS = fieldOfSciences[fos];
    let subFos: any[] = [];
    selectedFOS.forEach((item: {}) => {
      subFos = [...subFos, ...Object.keys(item)];
    });
    return subFos;
  };

  const getSubSubFos = () => {
    if (!subFos) return [];
    const selectedFOS = fieldOfSciences[fos];
    let subSubFos: any[] = [];
    selectedFOS.forEach((item: { [x: string]: any; }) => {
      if (item[subFos]) {
        subSubFos = [...subSubFos, ...item[subFos]];
      }
    });
    return subSubFos;
  };


  const selectPublicationType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setpublicationType(event.target.value as string);
  };

  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <h1 className={styles.title}>
            Research Topic Trends Prediction Dashboard
          </h1>
          <br />
          <p>
            This dashboard offers an intuitive interface for predicting and analyzing research topics based on the field of science and publication type. Whether you&apos;re an academic, researcher, or student, our tool will help you stay ahead of the latest trends in your field.
            <br/><br/>
            Use Cases
            <br/>
            Our Research Topic Prediction Dashboard is ideal for:
            <br/>
            - Researchers and Academics: Stay updated on the latest research trends and discover new areas of interest within your field.
            <br/>
            - Students: Identify trending topics for thesis or dissertation work.
            <br/>
            - Institutions: Analyze and predict research directions to support strategic planning and funding decisions.
          </p>
        </div>
      </div>
      <div className={styles.center}>
        <form className={styles.form}>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-contextual-keywords"
              label="Type Contextual Keywords (Optional)"
              value={concept}
              onChange={handleConceptChange}
              className={styles.textfield}
              fullWidth
            />
          </Grid>
          <Grid sx={{height:'1rem'}} />
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-select-publication-type"
                select
                label="Select Publication Type"
                value={publicationType}
                onChange={selectPublicationType}
                className={styles.textfield}
                fullWidth
              >
                {publicationTypes.map((publicationType, index) => (
                  <MenuItem key={index} value={publicationType}>
                    {publicationType}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid sx={{height:'1rem'}} />
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-select-fos"
                select
                label="Select FOS"
                value={fos}
                onChange={handleFOSChange}
                disabled={!publicationType}
                className={styles.textfield}
                fullWidth
              >
                {Object.keys(fieldOfSciences)?.map((fieldOfScience, index) => (
                  <MenuItem key={index} value={fieldOfScience}>
                    {fieldOfScience}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid sx={{height:'1rem'}} />
            <Grid item xs={12} md={6}>
              <TextField
                id="select-sub-fos"
                select
                label="Select Sub FOS"
                value={subFos}
                onChange={handleSubFOSChange}
                disabled={!fos}
                className={styles.textfield}
                fullWidth
              >
                {getSubFos().map((subFos, index) => (
                  <MenuItem key={index} value={subFos}>
                    {subFos}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid sx={{height:'1rem'}} />
            <Grid item xs={12} md={6}>
              <TextField
                id="select-sub-sub-fos"
                select
                label="Select Specific FOS"
                value={subSubFos}
                onChange={handleSubSubFOSChange}
                disabled={!subFos}
                className={styles.textfield}
                fullWidth
              >
                {getSubSubFos().map((subSubFos, index) => (
                  <MenuItem key={index} value={subSubFos}>
                    {subSubFos}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid sx={{height:'2rem'}} />
          <Grid item xs={12}>
            <Link
              href={{
                pathname: '/generated-topics',
                query: { keywords: concept, fos: subSubFos, publication_type: publicationType },
              }}
            >
              <Button 
                disabled={!subSubFos}
                color='primary'
                className={styles.SubmitButton}
              >
                GENERATE TOPICS
              </Button>
            </Link>
          </Grid>
        </form>
      </div>
    </main>
  );
}
