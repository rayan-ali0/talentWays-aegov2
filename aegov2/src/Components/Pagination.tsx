
export const Pagination = () => {
  return (
   <div className="flex items-center justify-center">
	  {/* <!-- Code for Mobile Pagination --> */}
	  <div className="aegov-pagination flex flex-1 justify-between items-center sm:hidden">
		  <a className="aegov-pagination-previous" href="#">
			  <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				  <rect width="256" height="256" fill="none" />
				  <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			  </svg>
			  <span>Previous</span>
		  </a>
		  <span className="pages">Page 10 of 13</span>
		  <a className="aegov-pagination-next" href="#">
			  <span>Next</span>
			  <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				  <rect width="256" height="256" fill="none" />
				  <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			  </svg>
		  </a>
	  </div>
	  {/* <!-- Code for Desktop Pagination --> */}
	  <div className="aegov-pagination max-sm:hidden" role="navigation">
		  <a className="aegov-pagination-first" aria-label="First Page" href="#">
			  <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				  <rect width="256" height="256" fill="none" />
				  <polyline points="200 208 120 128 200 48" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
				  <polyline points="120 208 40 128 120 48" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			  </svg>
			  <span>First</span>
		  </a>
		  <a className="aegov-pagination-previous" rel="prev" aria-label="Previous Page" href="#">
			  <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				  <rect width="256" height="256" fill="none" />
				  <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			  </svg>
			  <span>Previous</span>
		  </a>
		  <a className="aegov-pagination-page aegov-pagination-smaller" title="Page 1" href="#">1</a>
		  <a className="aegov-pagination-page aegov-pagination-smaller" title="Page 2" href="#">2</a>
		  <span aria-current="page" className="aegov-pagination-current">3</span>
		  <a className="aegov-pagination-page aegov-pagination-larger" title="Page 4" href="#">4</a>
		  <a className="aegov-pagination-page aegov-pagination-larger" title="Page 5" href="#">5</a>
		  <span className="aegov-pagination-extend">...</span>
		  <a className="aegov-pagination-page aegov-pagination-larger" title="Page 17" href="#">17</a>
		  <a className="aegov-pagination-next" rel="next" aria-label="Next Page" href="#">
			  <span>Next</span>
			  <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				  <rect width="256" height="256" fill="none" />
				  <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			  </svg>
		  </a>
		  <a className="aegov-pagination-last" aria-label="Last Page" href="#">
			  <span>Last</span>
			  <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				  <rect width="256" height="256" fill="none" />
				  <polyline points="56 48 136 128 56 208" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
				  <polyline points="136 48 216 128 136 208" fill="none" stroke="currentColor"
					  stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			  </svg>
		  </a>
	  </div>	
  </div>
  
  )
}
