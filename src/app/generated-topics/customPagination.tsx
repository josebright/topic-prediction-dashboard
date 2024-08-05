import React from 'react';
import { Button, Grid } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

interface CustomPaginationProps {
    count: number;
    page: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ count, page, onPageChange }) => {
  const handlePrevPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (page > 0) {
      onPageChange(event, page - 1);
    }
  };

  const handleNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (count !== 0) {
        onPageChange(event, page + 1);
    }
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center" style={{ padding: '1rem' }}>
      <Button 
        onClick={handlePrevPage} 
        disabled={page === 0}
        startIcon={<ArrowBack />}
      >
        Previous
      </Button>
      <Button 
        onClick={handleNextPage}
        disabled={count === 0}
        endIcon={<ArrowForward />}
      >
        Next
      </Button>
    </Grid>
  );
};

export default CustomPagination;
