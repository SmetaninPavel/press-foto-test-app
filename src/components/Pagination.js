import React from 'react';
import './Pagination.css';

const Pagination = ({ onChangePage, pages }) => 
  <div className='pagination-box'>
    {pages.countArray.map((page, index) => 
      <button 
        key={index}
        className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'
        onClick={() => onChangePage(page)}
      >
        <div 
          className={page === pages.current ? 'page active-page' : 'page'}
        >
          <span>{page}</span>
        </div>
      </button>
    )}
  </div>

export default Pagination;
