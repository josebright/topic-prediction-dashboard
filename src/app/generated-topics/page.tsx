/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect, useRef, Suspense } from 'react';
import styles from '../page.module.css';
import { Dialog, DialogTitle, DialogContent, Chip, Typography, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Grid } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import CustomPagination from './customPagination';

interface GeneratedTopicProps {
    generated_title: string;
    matching_authors: string[];
    matching_publication_titles: string[];
}

interface DetailsContentProps {
    keywords: string;
    fos: string;
    publication_type: string;
  }


const DetailsContent: React.FC<DetailsContentProps>  = ({ keywords, fos, publication_type }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const initialFetch = useRef(true);
    const [generatedTopicsData, setGeneratedTopicsData] = useState<GeneratedTopicProps[] | null>(null);
    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
    const [abstract, setAbstract] = useState<string | null>(null);
    const [loadingAbstract, setLoadingAbstract] = useState(false);

    const generateAbstract = async (title: string) => {
        try {
            if (fos && publication_type && title) {
                const response = await fetch("http://127.0.0.1:5000/generate-abstract", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fos,
                        publication_type,
                        generated_title: title,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                setAbstract(jsonData.abstract);
            }
            setLoadingAbstract(false);
        } catch (error) {
            console.error('Error generating abstract:', error);
            setLoadingAbstract(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (fos && publication_type) {
                const response = await fetch("http://127.0.0.1:5000/generate-titles", {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fos,
                        publication_type,
                        concept: keywords,
                        page,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                setGeneratedTopicsData(jsonData);
                setRowsPerPage(jsonData?.length - 1)
            }
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
    
        if (initialFetch.current || page >= 0) {
            fetchData();
            initialFetch.current = false;
        }
    }, [page]);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
        setLoading(true);
    };

    const handleClickOpen = (title: string, authors: string[]) => {
        setLoadingAbstract(true)
        generateAbstract(title)
        setSelectedTitle(title);
        setSelectedAuthors(authors);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedTitle(null);
        setSelectedAuthors([]);
    };

    const stripTitle = (title: string) => {
        return title.replace(/^\d+\.\s*"(.+)"$/, '$1');
    };

    const dataToDisplay = generatedTopicsData && generatedTopicsData.length > 0 ? generatedTopicsData?.slice(0, -1) : [];


  return (
    <main className={styles.submain}>
        {loading ? (
            <CircularProgress />
        ) : (
            <Grid item xs={11} md={8}>
                <Link href="/">
                    <Button className={styles.backButton}>
                        <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
                            <Grid item style={{marginTop: '0.5rem'}}>
                                <ArrowBack />
                            </Grid>
                            <Grid item>
                                Back
                            </Grid>
                        </Grid>
                    </Button>
                </Link>
                <h1>Generated Topics for {publication_type.charAt(0).toUpperCase() + publication_type.slice(1)}</h1>
                <br/>
                <br/>
                <TableContainer component={Paper} style={{ width: '80vw' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.tableHeader}>S/N</TableCell>
                                <TableCell className={styles.tableHeader}>Generated Title</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataToDisplay && dataToDisplay.length > 0 && dataToDisplay.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className={styles.tableCell}>{page * rowsPerPage + index + 1}</TableCell>
                                    <TableCell className={styles.tableCell}>
                                        <Typography
                                            sx={{ 
                                                cursor: 'pointer', 
                                                textDecoration: 'none', 
                                                '&:hover': { textDecoration: 'underline' } 
                                            }} 
                                            onClick={() => handleClickOpen(stripTitle(item.generated_title), item.matching_authors)}
                                        >
                                            {stripTitle(item.generated_title)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <CustomPagination
                        count={dataToDisplay ? dataToDisplay.length : 0}
                        page={page}
                        onPageChange={handleChangePage}
                    />
                </TableContainer>
                <Dialog open={open} onClose={handleClose}>
                    {loadingAbstract ?
                            <CircularProgress />
                        :
                            <>
                                <DialogTitle>
                                    <span style={{fontWeight:'bold'}}>Topic:</span> {selectedTitle}
                                </DialogTitle>
                                <DialogContent>
                                    <Grid item>
                                        <Typography sx={{fontWeight:'bold'}}>Abstract:</Typography>
                                        {abstract}
                                    </Grid>
                                    <Grid sx={{height:'1rem'}} />
                                    <Grid item>
                                        <Typography sx={{fontWeight:'bold'}}>Recommended Authors for Collaboration:</Typography>
                                        {selectedAuthors.map((author, index) => (
                                            <Chip key={index} label={author} style={{ margin: '0.5rem' }} />
                                        ))}
                                    </Grid>
                                </DialogContent>
                            </>
                     }
                </Dialog>
            </Grid>
        )}
    </main>
  );
}

export default function Details(): JSX.Element {
    const searchParams = useSearchParams();
    const keywords = searchParams.get('keywords') || "";
    const fos = searchParams.get('fos') || "";
    const publication_type = searchParams.get('publication_type') || "";

    return (
        <main className={styles.submain}>
            <Suspense fallback={<CircularProgress />}>
                <DetailsContent keywords={keywords} fos={fos} publication_type={publication_type} />
            </Suspense>
        </main>
    );
}
