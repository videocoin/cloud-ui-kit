import React, { useState } from 'react';
import css from './Pagination.module.scss';
import Icon from '../Icon/Icon';
import Typography from '../Typography/Typography';

interface PaginationProps {
  onChange: (page: number) => void;
  initialPage?: number;
  max: boolean;
}

const Pagination = ({
  initialPage = 1,
  onChange,
  max,
}: PaginationProps) => {
  const [page, setPage] = useState(initialPage);
  const decPage = () => {
    const newPage = page - 1;
    setPage(newPage);
    onChange(newPage);
  };
  const incPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    onChange(newPage);
  };
  return (
    <div className={css.root}>
      <button type="button" onClick={decPage} disabled={page === 1}>
        <Icon name="arrowLeft" />
      </button>
      <Typography type="smallBody">Page {page}</Typography>
      <button type="button" onClick={incPage} disabled={max}>
        <Icon name="arrowRight" />
      </button>
    </div>
  );
};

export default Pagination;
