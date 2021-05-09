import React from 'react';
import scss from '../scss/pagination.module.scss';

export default function Pagination({ page, hasNextPage, setPage }) {

  function changePage(val: number) {
    setPage((prevPage: number) => prevPage + val);
  }


  return (
    <ul className={scss.paginate}>
      {page !== 1 && (
        <li className={scss.prev} onClick={() => changePage(-1)}>
          &lt;
        </li>
      )}
      {page !== 1 && (
        <li className={scss.item} onClick={() => setPage(1)}>
          1
        </li>
      )}
      {page > 2 && (
        <li>
          <span>...</span>
        </li>
      )}
      {page > 2 && (
        <li className={scss.item} onClick={() => changePage(-1)}>
          {page - 1}
        </li>
      )}
      <li className={scss.active}>{page}</li>
      {hasNextPage && (
        <li className={scss.item} onClick={() => changePage(1)}>
          {page + 1}{" "}
        </li>
      )}
      {hasNextPage && (
        <li className={scss.next} onClick={() => changePage(1)}>
          &gt;
        </li>
      )}
    </ul>
  );
}
