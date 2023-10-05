import React from 'react'
import { getPageArray } from '../../../utils/pages'

export default function Pagination({ totalPages, page, setPage }) {
    let pageArray = getPageArray(totalPages)

  return (
      <div className="page__wraper">
          {pageArray.map(p =>
              <span className={page === p ? 'page page__current' : 'page'}
                  key={p}
                  onClick={() => setPage(p)}
              >
                  {p}
              </span>)}
      </div>
  )
}
